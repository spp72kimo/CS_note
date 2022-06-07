[[HTTP Protocol]] 裡面的一種格式

| Status Code | Meaning       | 
| ----------- | ------------- |
| 1\*\*       | Hold on       |
| 2\*\*       | Here you go   |
| 3\*\*       | Go away       |
| 4\*\*       | You fucked up |
| 5\*\*       | I fucked up   |

200 請求成功
204 請求成功，但 response 的 body 沒有東西，( ex. DELETE )
301 永久搬家 
302 暫時搬家
4 開頭 用戶端錯誤
404 沒有這個網頁

5 開頭 Server端錯誤
500
503