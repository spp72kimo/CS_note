# php 新增 MySQL 資料
```php
	require_once("conn.php");

	if(empty($_POST['username']) || empty($_POST[email]))
		die("請完整輸入欄位內容");

	$sql_cmd = sprintf("INSERT INTO users(Name, Email) VALUES ('%s', '%s')",
		$_POST['username'],
		$_POST['email']
	);
	echo $sql_cmd;

	$result = $conn->query($sql_cmd);
	if($conn->error) {
		die("新增失敗" . $conn->error); 
	}
	header("Location: /test/index.php");
```
這邊用 POST 的方式來傳送資料內容，並且用 empty() 來驗證是否有輸入資料。
新增失敗就會停止跳轉網頁
新增成功就跳回原頁面

#PHP 
#MySQL 
