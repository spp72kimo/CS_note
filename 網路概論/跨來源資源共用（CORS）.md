# 跨來源資源共用（CORS）
Cross-Origin Resource Sharing => CORS

如果 server 在 response 的 header 裡面沒有加入 **Access-Control-Allow-Oirgin** 這個 header 設定，**瀏覽器**就不會讓我們存取 response 裡面的資料，除非我們在相同的 domain 做 request。

**瀏覽器**會在我們當前網頁發送 request 的時候加上一個 origin 的 header，來判斷目前是不是同源。

server 如果有在 header 加上 Access-Control-Allow-Origin: \* 的話，就沒有這個限制。

ps. 這是**瀏覽器**給我們的限制，如果是在 node.js 直接發送 request 就沒有這個限制。



例外：
為了某些方便，有些 html 的標籤是不後 CORS 的限制的：
- \<img src=''\>
- \<script\ src=''>

#request 
#headers 
#網路概論 

