<?php
declare(strict_types=1);
header('Content-Type: application/json; charset=UTF-8');

$file = dirname(__DIR__) . '/private-data/blog-posts.json';
$starter = [
    [
        'title' => 'Why AI skills matter now',
        'category' => 'AI Learning',
        'date' => date('Y-m-d'),
        'image' => 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=900&q=80',
        'video' => '',
        'excerpt' => 'AI productivity is becoming a daily work advantage for students, professionals and businesses.',
        'content' => 'AI skills help people learn faster, work smarter and create better digital opportunities.',
    ],
    [
        'title' => 'Prompt engineering basics',
        'category' => 'Prompt Engineering',
        'date' => date('Y-m-d'),
        'image' => 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80',
        'video' => '',
        'excerpt' => 'Better prompts create better outputs, clearer workflows and more useful business systems.',
        'content' => 'A clear prompt gives AI the right context, goal, tone and output format.',
    ],
];

$posts = $starter;
if (is_file($file)) {
    $decoded = json_decode((string)file_get_contents($file), true);
    if (is_array($decoded)) {
        $posts = $decoded;
    }
}

echo json_encode(['posts' => array_values($posts)], JSON_UNESCAPED_SLASHES | JSON_UNESCAPED_UNICODE);
