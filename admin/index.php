<?php
declare(strict_types=1);
session_start();

$password = 'DigiSparkX@2026';
$dataDir = dirname(__DIR__) . '/private-data';
if (!is_dir($dataDir)) {
    @mkdir($dataDir, 0755, true);
}
$blogFile = $dataDir . '/blog-posts.json';

function h(string $value): string {
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

function starts_with_text(string $text, string $prefix): bool {
    return substr($text, 0, strlen($prefix)) === $prefix;
}

function save_posts(string $blogFile, array $posts): void {
    @file_put_contents(
        $blogFile,
        json_encode(array_values($posts), JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES),
        LOCK_EX
    );
}

if (isset($_POST['password'])) {
    if (hash_equals($password, (string)$_POST['password'])) {
        $_SESSION['digisparkx_admin'] = true;
    } else {
        $error = 'Password galat hai.';
    }
}

if (isset($_GET['logout'])) {
    session_destroy();
    header('Location: /admin/');
    exit;
}

if (empty($_SESSION['digisparkx_admin'])):
?><!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>DigiSparkX Admin</title>
  <style>
    body{font-family:Inter,Arial,sans-serif;background:#07162f;color:#fff;display:grid;place-items:center;min-height:100vh;margin:0}
    .box{width:min(440px,92vw);background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.18);border-radius:28px;padding:34px;box-shadow:0 30px 90px rgba(0,0,0,.32)}
    input,button{width:100%;height:48px;border-radius:12px;border:0;margin-top:12px;padding:0 14px}
    button{background:linear-gradient(135deg,#0b2f6b,#ff7a00);color:#fff;font-weight:900}
    .err{color:#ffd2d2}
  </style>
</head>
<body>
  <form class="box" method="post">
    <h1>DigiSparkX Blog Panel</h1>
    <p>Blog add/edit karne ke liye login karein.</p>
    <?php if (!empty($error)) echo '<p class="err">'.h($error).'</p>'; ?>
    <input type="password" name="password" placeholder="Admin password" required>
    <button>Login</button>
  </form>
</body>
</html><?php
exit;
endif;

$posts = [];
if (is_file($blogFile)) {
    $decoded = json_decode((string)file_get_contents($blogFile), true);
    if (is_array($decoded)) {
        $posts = $decoded;
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['delete_index'])) {
    $deleteIndex = (int)$_POST['delete_index'];
    if (isset($posts[$deleteIndex])) {
        $imagePath = (string)($posts[$deleteIndex]['image'] ?? '');
        if (starts_with_text($imagePath, '/uploads/blog/')) {
            $uploadRoot = realpath(dirname(__DIR__) . '/uploads/blog');
            $imageFile = realpath(dirname(__DIR__) . $imagePath);
            if ($uploadRoot && $imageFile && starts_with_text($imageFile, $uploadRoot) && is_file($imageFile)) {
                @unlink($imageFile);
            }
        }
        array_splice($posts, $deleteIndex, 1);
        save_posts($blogFile, $posts);
        header('Location: /admin/?deleted=1');
        exit;
    }
}

$editIndex = isset($_GET['edit']) ? (int)$_GET['edit'] : -1;
$editPost = ($editIndex >= 0 && isset($posts[$editIndex]) && is_array($posts[$editIndex])) ? $posts[$editIndex] : null;

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['title'])) {
    $postIndex = isset($_POST['edit_index']) && $_POST['edit_index'] !== '' ? (int)$_POST['edit_index'] : -1;
    $existingPost = ($postIndex >= 0 && isset($posts[$postIndex]) && is_array($posts[$postIndex])) ? $posts[$postIndex] : [];
    $uploadedImage = '';
    if (!empty($_FILES['image_file']['tmp_name']) && is_uploaded_file($_FILES['image_file']['tmp_name'])) {
        $uploadDir = dirname(__DIR__) . '/uploads/blog';
        if (!is_dir($uploadDir)) {
            @mkdir($uploadDir, 0755, true);
        }
        $original = basename((string)$_FILES['image_file']['name']);
        $ext = strtolower(pathinfo($original, PATHINFO_EXTENSION));
        if (in_array($ext, ['jpg', 'jpeg', 'png', 'webp', 'gif'], true)) {
            $safeName = 'blog-' . date('YmdHis') . '-' . bin2hex(random_bytes(4)) . '.' . $ext;
            $target = $uploadDir . '/' . $safeName;
            if (@move_uploaded_file($_FILES['image_file']['tmp_name'], $target)) {
                $uploadedImage = '/uploads/blog/' . $safeName;
            }
        }
    }

    $imageValue = trim((string)($_POST['image'] ?? ''));
    $post = [
        'title' => trim((string)($_POST['title'] ?? '')),
        'category' => trim((string)($_POST['category'] ?? 'DigiSparkX')),
        'date' => trim((string)($_POST['date'] ?? date('Y-m-d'))),
        'image' => $uploadedImage ?: ($imageValue !== '' ? $imageValue : (string)($existingPost['image'] ?? '')),
        'video' => trim((string)($_POST['video'] ?? '')),
        'excerpt' => trim((string)($_POST['excerpt'] ?? '')),
        'content' => trim((string)($_POST['content'] ?? '')),
    ];

    if ($post['title'] !== '') {
        if ($postIndex >= 0 && isset($posts[$postIndex])) {
            $posts[$postIndex] = $post;
            save_posts($blogFile, $posts);
            header('Location: /admin/?updated=1');
            exit;
        }
        array_unshift($posts, $post);
        save_posts($blogFile, $posts);
        header('Location: /admin/?saved=1');
        exit;
    }
}
?><!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <title>DigiSparkX Blog Panel</title>
  <style>
    body{font-family:Inter,Arial,sans-serif;background:#f4f7fb;color:#07162f;margin:0}
    .wrap{width:min(1050px,calc(100% - 32px));margin:30px auto}
    .top{display:flex;justify-content:space-between;align-items:center;gap:18px}
    .card{background:#fff;border:1px solid #dce5f2;border-radius:24px;padding:24px;margin:18px 0;box-shadow:0 20px 60px rgba(7,22,47,.08)}
    input,textarea{width:100%;box-sizing:border-box;border:1px solid #cbd6e4;border-radius:12px;padding:12px;margin:8px 0 14px;font:inherit}
    textarea{min-height:130px}
    button,.btn{display:inline-flex;align-items:center;justify-content:center;min-height:46px;border:0;border-radius:12px;background:linear-gradient(135deg,#0b2f6b,#ff7a00);color:#fff;font-weight:900;padding:0 18px;text-decoration:none;cursor:pointer}
    .grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
    .ok{color:#147a31;font-weight:900}
    .saved-blog{display:flex;justify-content:space-between;gap:18px;align-items:flex-start}
    .saved-blog h3{margin-bottom:6px}
    .actions{display:flex;gap:10px;align-items:center}
    .edit-btn{background:linear-gradient(135deg,#0b2f6b,#0ca7d2);min-width:110px}
    .delete-btn{background:linear-gradient(135deg,#b42318,#ff4d4d);min-width:120px}
    @media(max-width:720px){.grid{grid-template-columns:1fr}.top,.saved-blog{display:block}.actions{display:block}.edit-btn,.delete-btn{width:100%;margin-top:10px}}
  </style>
</head>
<body>
  <main class="wrap">
    <div class="top">
      <div>
        <h1>DigiSparkX Blog Panel</h1>
        <p>Yahan se aap image, video aur text ke saath blog add kar sakti hain.</p>
      </div>
      <a class="btn" href="/admin/?logout=1">Logout</a>
    </div>

    <?php if (isset($_GET['saved'])) echo '<p class="ok">Blog save ho gaya. Website par show ho jayega.</p>'; ?>
    <?php if (isset($_GET['updated'])) echo '<p class="ok">Blog update ho gaya. Website par changes show ho jayenge.</p>'; ?>
    <?php if (isset($_GET['deleted'])) echo '<p class="ok">Blog delete ho gaya.</p>'; ?>

    <form class="card" method="post" enctype="multipart/form-data">
      <h2><?php echo $editPost ? 'Edit Blog' : 'Add New Blog'; ?></h2>
      <?php if ($editPost): ?>
        <input type="hidden" name="edit_index" value="<?php echo (int)$editIndex; ?>">
      <?php endif; ?>
      <div class="grid">
        <label>Title<input name="title" required value="<?php echo h((string)($editPost['title'] ?? '')); ?>"></label>
        <label>Category<input name="category" placeholder="AI, Marketing, Course..." value="<?php echo h((string)($editPost['category'] ?? '')); ?>"></label>
        <label>Date<input name="date" type="date" value="<?php echo h((string)($editPost['date'] ?? date('Y-m-d'))); ?>"></label>
        <label>Image URL<input name="image" placeholder="https://..." value="<?php echo h((string)($editPost['image'] ?? '')); ?>"></label>
      </div>
      <label>Upload image<input name="image_file" type="file" accept="image/*"></label>
      <label>YouTube video link<input name="video" placeholder="https://www.youtube.com/watch?v=..." value="<?php echo h((string)($editPost['video'] ?? '')); ?>"></label>
      <label>Short description<textarea name="excerpt"><?php echo h((string)($editPost['excerpt'] ?? '')); ?></textarea></label>
      <label>Full blog content<textarea name="content"><?php echo h((string)($editPost['content'] ?? '')); ?></textarea></label>
      <button><?php echo $editPost ? 'Save Changes' : 'Add Blog'; ?></button>
      <?php if ($editPost): ?><a class="btn" href="/admin/">Cancel Edit</a><?php endif; ?>
    </form>

    <section class="card">
      <h2>Saved blogs</h2>
      <?php if (!$posts): ?>
        <p>Abhi koi blog add nahi hai.</p>
      <?php endif; ?>
      <?php foreach ($posts as $i => $p): ?>
        <article class="saved-blog">
          <div>
            <h3><?php echo h((string)($p['title'] ?? 'Untitled')); ?></h3>
            <p><?php echo h((string)($p['category'] ?? '')); ?> · <?php echo h((string)($p['date'] ?? '')); ?></p>
          </div>
          <div class="actions">
            <a class="btn edit-btn" href="/admin/?edit=<?php echo (int)$i; ?>">Edit</a>
            <form method="post" onsubmit="return confirm('Kya aap is blog ko delete karna chahti hain?');">
              <input type="hidden" name="delete_index" value="<?php echo (int)$i; ?>">
              <button class="delete-btn" type="submit">Delete</button>
            </form>
          </div>
        </article>
        <hr>
      <?php endforeach; ?>
    </section>
  </main>
</body>
</html>
