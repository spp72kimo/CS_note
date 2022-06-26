# 用 php 處理 XSS
### htmlspecialchars("字串",  ENT_QUOTES)
會將特殊字元轉換，不會讓 html 解析這些特殊字元

一般建議不要轉換進原本資料庫內的資料，而是將資料撈出來之後再做轉換！
這樣資料才可以被不同平台拿來做使用。

可參考：[# htmlspecialchars](https://www.php.net/manual/en/function.htmlspecialchars.php)

#PHP 
#XSS 
#hack 

