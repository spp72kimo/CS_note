# php 修改 MySQL 資料
```php
require_once('conn.php');

if(empty($_POST['username']) || empty($_POST['email']) || empty($_POST['id']))
	die("請輸入完整資料！");

$mysql_cmd = sprintf("UPDATE users SET name='%s', email='%s' WHERE id=%d ", $_POST['username'], $_POST['email'], $_POST['id']);

$result = $conn->query($mysql_cmd);
header("Location: index.php");
```

#PHP 
#MySQL 