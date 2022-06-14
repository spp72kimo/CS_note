# JSNOP
JSON with padding

除了 [[跨來源資源共用（CORS）]]之外，另外一種向 server 取得資料的方式，
就是利用 server 的 response 會帶上一個 callback function 的名稱，而我們只要事先定義好這個 callback function 的話，當 response 回來，javaScript 就會直接執行這個 function 了！

舉例像是 twitch 就有這樣提供這樣 JSNOP 的 API，
我們可以在 queryString 的部分提供給他 function 的名稱，他就會用這個名稱的 function 回傳資料內容。

example:
向 twitch API 發送 JSNOP 的 request
https://api.twitch.tv/kraken/games/top?client_id=xxx&callback=hello&limit=1
我們把 callback 的參數設定 hello，所以他會回傳
**hello**({name:222,OOooOO})

所以我們只要預先設定好 hello 這個 function 這麼處理資料就好了。


#request 