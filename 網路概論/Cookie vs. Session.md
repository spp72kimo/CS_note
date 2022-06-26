# Cookie vs. Session
由於 http protocol 本身 stateless(無狀態) 的特性，使得每次向 server 的 request 無法延續上一次的結果，為了減少 server 和 client 重複的 response 和 resquest，就產生了 Cookie 和 Session

## Cookie
存放在 Client 端
當 Client 向 Server 發送 Request 後，Server 可以把必要的 Response 資訊存進 Response header 裡面的 Cookie，比如會員的 ID、或是購物車的商品等等，這樣當下次 Client 在發送其他的 Request 的時候，就不用再重覆查一次會員 ID，或是購物車商裡面的商品等等

雖然這樣是一個很方便的解決方式，但是卻存在了一個很嚴重的問題，
就是 Client 端的 Cookie 是可以被使用者修改的，比如會員 ID，就有可能發生盜取資訊的問題，所以產生了 Session


## Session
存放在 Server 端
當 Client 端發送請求給 Server ，Server 會給 Client 端建立一個 Session ID ，並且把這個 Client Request 的必要資訊存進 Server 端專屬於他的 Session ID 裡面，比如會員資訊。
然後 Server 會把 Response header Cookie 裡面存進該 Client 的 Session ID，一併連同 Response 回傳給 Client。

之後，如果 Client 需要之前查過的訊息，或是查看會員資料等等，會把 Cookie 裡面的 Session ID 放進 Request header 裡面送給 Server，Server就可以根據他的 Session ID 拿到之前已經存在 Session 裡面的資訊了。



Cookie 裡面的 SessionID 很像一個會員證，而用這個會員證就可以向 Session 索取會員資料或是辦理其他需求。


參考自 [Day14-Session與Cookie差別](https://medium.com/tsungs-blog/day14-session%E8%88%87cookie%E5%B7%AE%E5%88%A5-eb7b4035a382)

#網路概論 
#request 
#headers 
#session
#cookie