# php 取得 MySQL 資料
### \$result = $conn->query("SQL指令")
用 php 對 SQL 下指令
這邊的 $conn 是 mysqli() 連線後的 instance

### \$row = fetch.assoc($result) 
取得每一列的回傳內容，可以用迴圈取出，如果沒有內容就回傳空值

ex.
```php
<?php 
	require_once("conn.php");

	$result = $conn->query("SELECT * FROM users");

	while($row = $result->fetch_assoc()) {
		echo "Name: " . $row['name'] . "<br>";
		echo "Email: " . $row['email'] . "<br>";
		echo "Created time: " . $row['created_at'] . "<br>";
	}

 ?>
```
#PHP 
#MySQL 