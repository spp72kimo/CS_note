# PHP
需要特別注意的地方：
1. 變數前面都要加 \$
2. 字串連接要用 "." ，不是用 "+"
3. 放在\<?php ... ?\>裡面
4. 要印出陣列變數要用 var_dump() 或是 print_r，一般的印出用 echo
	1. 輸出如果要換行要用 html 的標籤 br
5. $arr = array(1,2,3,4,5) 來宣告陣列
	1. 取得長度用 sizeof($arr)
	2. 印出可用 var_dump(\$arr) 或是 print_r($arr)
6. die()： 程式執行完這個 function 之後，就不會再繼續執行下去了，算是另一種形式的 echo
7. 物件裡面的 method 和 attribute 用 -> 來表示
	1. echo Object->name
8. require(), require_once() 引入檔案
9. header() 可用來設定 response 的 headers
	1. ex. `header("Location: index.html")`
10. sprintf()：格式化字串
	1.  %s 代替字串
	2. %d 代替十進位數字
	3. 用逗號隔開，之後的引數會順序帶入到前面的字串裡
	4. ex. `sprint("your name is %s. age is %d", "Steven", 36)`

#PHP