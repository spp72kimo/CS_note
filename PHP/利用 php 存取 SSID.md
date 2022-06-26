# 利用 php 存取 SSID
### session_start()
一開始要先 call 這個 function

### session\['自訂名稱'\] = 資料
將資料存進 session 自訂的名稱裡
php 會產生一組編碼 (SSID) 來和資料做連結，並將資料存檔
然後將 SSID 放進 response  的 headers 裡面的 set-cookie

### \$var = session\['指定名稱'\]
php 從 request 的 cookie 裡取回 SSID ，
並透過編碼找回原本儲存的資料，再 response 給 client

#session 
#cookie 
#PHP 
