# php 刪除 MySQL 資料
```php
	require_once('conn.php');

	$sql_cmd = sprintf("DELETE FROM users WHERE id='%d'", $_GET['id']);

	$result = $conn->query($sql_cmd);

	if($conn->affected_rows >=1)
		echo "刪除成功 | <a href='index.php'>返回</a>";
	else
		echo "刪除失敗 | <a href='index.php'>返回</a>";

	// header("Location: index.php"); 
```
不管是否有符合的條件，都不會報錯，只會顯示已刪除幾筆資料，
這時候可以用 **$conn->affected_row** 來判定有幾筆資料被刪除，
如果刪除 0 筆的話，代表沒有刪除成功。


### $conn->affected_row
可判定有幾筆資料受影響， $conn 是 mysqli() 的 instance

#PHP 
#MySQL 
