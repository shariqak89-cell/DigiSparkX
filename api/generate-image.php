<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

$input = json_decode(file_get_contents('php://input'), true);
$prompt = trim($input['prompt'] ?? '');
$image = trim($input['image'] ?? '');
$width = (int)($input['width'] ?? 1280);
$height = (int)($input['height'] ?? 1280);

if ($prompt === '') {
  http_response_code(422);
  echo json_encode(['ok' => false, 'error' => 'Prompt is required']);
  exit;
}

$width = max(512, min(1920, $width));
$height = max(512, min(1920, $height));
$prompt = substr($prompt, 0, 3500);
$image = substr($image, 0, 7000000);

function json_response($data, $status = 200) {
  http_response_code($status);
  echo json_encode($data);
  exit;
}

function http_post_json($url, $headers, $payload) {
  $ch = curl_init($url);
  curl_setopt_array($ch, [
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_HTTPHEADER => $headers,
    CURLOPT_POSTFIELDS => json_encode($payload),
    CURLOPT_TIMEOUT => 120
  ]);
  $body = curl_exec($ch);
  $status = curl_getinfo($ch, CURLINFO_HTTP_CODE);
  $error = curl_error($ch);
  curl_close($ch);
  return [$status, $body, $error];
}

function openai_size($width, $height) {
  if ($height > $width) return '1024x1536';
  if ($width > $height) return '1536x1024';
  return '1024x1024';
}

function try_openai_image($prompt, $image, $width, $height) {
  $key = getenv('OPENAI_API_KEY');
  if (!$key) return null;

  $size = openai_size($width, $height);

  // If the visitor uploaded a product image, use it as reference through the Responses image-generation tool.
  if (strpos($image, 'data:image/') === 0) {
    $payload = [
      'model' => getenv('OPENAI_RESPONSES_MODEL') ?: 'gpt-5.6',
      'input' => [[
        'role' => 'user',
        'content' => [
          ['type' => 'input_text', 'text' => $prompt],
          ['type' => 'input_image', 'image_url' => $image, 'detail' => 'auto']
        ]
      ]],
      'tools' => [[
        'type' => 'image_generation',
        'size' => $size,
        'quality' => 'high'
      ]]
    ];
    [$status, $body, $error] = http_post_json('https://api.openai.com/v1/responses', [
      'Content-Type: application/json',
      'Authorization: Bearer ' . $key
    ], $payload);
    $data = json_decode($body, true);
    if ($status >= 200 && $status < 300 && isset($data['output'])) {
      foreach ($data['output'] as $item) {
        if (($item['type'] ?? '') === 'image_generation_call' && !empty($item['result'])) {
          return [
            'ok' => true,
            'provider' => 'openai-reference',
            'url' => 'data:image/png;base64,' . $item['result'],
            'width' => $width,
            'height' => $height
          ];
        }
      }
    }
  }

  // Text-to-image path when no reference image is supplied.
  $payload = [
    'model' => getenv('OPENAI_IMAGE_MODEL') ?: 'gpt-image-2',
    'prompt' => $prompt,
    'size' => $size,
    'quality' => 'high',
    'n' => 1
  ];
  [$status, $body, $error] = http_post_json('https://api.openai.com/v1/images/generations', [
    'Content-Type: application/json',
    'Authorization: Bearer ' . $key
  ], $payload);
  $data = json_decode($body, true);
  if ($status >= 200 && $status < 300 && !empty($data['data'][0]['b64_json'])) {
    return [
      'ok' => true,
      'provider' => 'openai',
      'url' => 'data:image/png;base64,' . $data['data'][0]['b64_json'],
      'width' => $width,
      'height' => $height
    ];
  }

  return null;
}

$openai = function_exists('curl_init') ? try_openai_image($prompt, $image, $width, $height) : null;
if ($openai) json_response($openai);

// Free fallback. This needs no secret key. It is prompt-based; uploaded product image is used in the prompt copy,
// while premium reference-image generation activates automatically when OPENAI_API_KEY is added server-side.
$seed = random_int(10000, 999999);
$url = 'https://image.pollinations.ai/prompt/' . rawurlencode($prompt)
  . '?width=' . $width
  . '&height=' . $height
  . '&model=flux'
  . '&enhance=true'
  . '&safe=true'
  . '&nologo=true'
  . '&seed=' . $seed
  . '&referrer=digisparkx.com';

json_response([
  'ok' => true,
  'provider' => 'free-fallback',
  'url' => $url,
  'width' => $width,
  'height' => $height
]);
