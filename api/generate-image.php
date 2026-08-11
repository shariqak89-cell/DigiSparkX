<?php
header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['ok' => false, 'error' => 'Method not allowed']);
  exit;
}

$input = json_decode(file_get_contents('php://input'), true);
$prompt = trim($input['prompt'] ?? '');
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
$seed = random_int(10000, 999999);

// Server-side image generation bridge.
// A private provider API key can be added later in hosting environment settings.
// The current live fallback uses a free public image generator with nologo=true.
$url = 'https://image.pollinations.ai/prompt/' . rawurlencode($prompt)
  . '?width=' . $width
  . '&height=' . $height
  . '&model=flux'
  . '&enhance=true'
  . '&safe=true'
  . '&nologo=true'
  . '&seed=' . $seed
  . '&referrer=digisparkx.com';

echo json_encode([
  'ok' => true,
  'url' => $url,
  'width' => $width,
  'height' => $height
]);
