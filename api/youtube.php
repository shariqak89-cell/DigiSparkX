<?php
declare(strict_types=1);
header('Content-Type: application/json; charset=UTF-8');
header('Cache-Control: public, max-age=900');

$channelId = 'UCrD5FioPlzseHNhM8J_8r8A';
$cacheDir = dirname(__DIR__) . '/private-data';
if (!is_dir($cacheDir)) {
    @mkdir($cacheDir, 0755, true);
}
$cacheFile = $cacheDir . '/youtube-cache.json';

if (is_file($cacheFile) && (time() - filemtime($cacheFile) < 900)) {
    readfile($cacheFile);
    exit;
}

$feedUrl = 'https://www.youtube.com/feeds/videos.xml?channel_id=' . rawurlencode($channelId);
$xmlString = @file_get_contents($feedUrl);
$videos = [];

if ($xmlString) {
    $xml = @simplexml_load_string($xmlString);
    if ($xml) {
        $xml->registerXPathNamespace('media', 'http://search.yahoo.com/mrss/');
        foreach ($xml->entry as $entry) {
            $videoId = (string)$entry->children('yt', true)->videoId;
            if ($videoId === '') {
                continue;
            }
            $title = trim((string)$entry->title);
            $videos[] = [
                'id' => $videoId,
                'title' => $title,
                'url' => 'https://www.youtube.com/watch?v=' . $videoId,
                'thumbnail' => 'https://img.youtube.com/vi/' . $videoId . '/hqdefault.jpg',
                'category' => 'DigiSparkX',
                'description' => 'Watch the latest DigiSparkX learning video.',
            ];
            if (count($videos) >= 12) {
                break;
            }
        }
    }
}

if (!$videos) {
    $videos = [
        ['id' => 'bSnjYyp27V4', 'title' => 'Best FREE AI Video Generator 2026', 'url' => 'https://www.youtube.com/watch?v=bSnjYyp27V4', 'thumbnail' => 'https://img.youtube.com/vi/bSnjYyp27V4/hqdefault.jpg', 'category' => 'AI Video', 'description' => 'AI video generation tools and practical workflow insights.'],
        ['id' => 'NV6EA7CMmo8', 'title' => 'Create Viral 3D AI Images from Your Photo', 'url' => 'https://www.youtube.com/watch?v=NV6EA7CMmo8', 'thumbnail' => 'https://img.youtube.com/vi/NV6EA7CMmo8/hqdefault.jpg', 'category' => 'AI Design', 'description' => 'Learn how to create professional 3D AI images from photos.'],
        ['id' => '3Q2TPyJdfcI', 'title' => 'Extract Any Content from YouTube Videos with AI', 'url' => 'https://www.youtube.com/watch?v=3Q2TPyJdfcI', 'thumbnail' => 'https://img.youtube.com/vi/3Q2TPyJdfcI/hqdefault.jpg', 'category' => 'AI Workflow', 'description' => 'Use AI to understand and extract useful content from videos.'],
    ];
}

$payload = json_encode(['videos' => $videos], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
@file_put_contents($cacheFile, $payload, LOCK_EX);
echo $payload;
