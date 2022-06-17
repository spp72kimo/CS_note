# GET, POST
php 用 GET 和 POST 傳送資料的方式

## GET
http://localhost:8080/search.php?username=steven&hobby=music
```php
if(empty($_GET[username]) || empty($_GET[hobby])) {
	echo "請填寫完整資料";
	exit();
}

echo "Your name is: " . "$_GET[username]" . <br>
echo "You hobby is: " . "$_GET[hobby]" . <br>

```


## POST
```php
if(empty($_POST_[username]) || empty($_POST[hobby])) {
	echo "請填寫完整資料";
	exit();
}

echo "Your name is: " . "$_POST[username]" . <br>
echo "You hobby is: " . "$_POST[hobby]" . <br>
```

empty() 可以用來檢測是否為空字串

#PHP 
#GET
#POST 