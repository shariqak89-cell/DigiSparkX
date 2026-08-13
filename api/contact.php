<?php
declare(strict_types=1);

$recipients = [
    'digisparkxuniverse@gmail.com',
    'digisparkxx@gmail.com',
];
$siteName = 'DigiSparkX';
$dataDir = dirname(__DIR__) . '/private-data';
if (!is_dir($dataDir)) {
    @mkdir($dataDir, 0755, true);
}

function clean_value($value): string {
    if (is_array($value)) {
        $value = implode(', ', $value);
    }
    return trim(str_replace(["\r", "\n"], ' ', strip_tags((string)$value)));
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Location: /contact/');
    exit;
}

$fields = [];
foreach ($_POST as $key => $value) {
    if (str_starts_with((string)$key, '_')) {
        continue;
    }
    $cleanKey = clean_value($key);
    $cleanValue = clean_value($value);
    if ($cleanKey !== '' && $cleanValue !== '') {
        $fields[$cleanKey] = $cleanValue;
    }
}

$name = $fields['Full Name'] ?? $fields['Name'] ?? 'Website Visitor';
$email = $fields['Email'] ?? '';
$phone = $fields['Phone'] ?? '';
$subject = 'New DigiSparkX website enquiry';

$messageLines = [
    'New enquiry received from the DigiSparkX website.',
    '',
    'Name: ' . $name,
    'Email: ' . ($email ?: 'Not provided'),
    'Phone: ' . ($phone ?: 'Not provided'),
    '',
    'Details:',
];
foreach ($fields as $key => $value) {
    $messageLines[] = $key . ': ' . $value;
}
$messageLines[] = '';
$messageLines[] = 'Received: ' . date('Y-m-d H:i:s');

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: DigiSparkX Website <no-reply@digisparkx.com>',
];
if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
    $headers[] = 'Reply-To: ' . $email;
}

$mailSent = false;
$mailResults = [];
foreach ($recipients as $recipient) {
    if (!filter_var($recipient, FILTER_VALIDATE_EMAIL)) {
        continue;
    }
    $sent = @mail($recipient, $subject, implode("\n", $messageLines), implode("\r\n", $headers));
    $mailResults[$recipient] = $sent;
    $mailSent = $mailSent || $sent;
}

$lead = [
    'time' => date('c'),
    'mail_sent' => $mailSent,
    'mail_results' => $mailResults,
    'ip' => $_SERVER['REMOTE_ADDR'] ?? '',
    'fields' => $fields,
];
$leadFile = $dataDir . '/leads.json';
$existing = [];
if (is_file($leadFile)) {
    $decoded = json_decode((string)file_get_contents($leadFile), true);
    if (is_array($decoded)) {
        $existing = $decoded;
    }
}
$existing[] = $lead;
@file_put_contents($leadFile, json_encode($existing, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE), LOCK_EX);

header('Location: /thank-you/?sent=' . ($mailSent ? '1' : 'saved'));
exit;
