# Preflight Request
預檢請求

如果 server 有設置 preflight request 的機制，我們就可以把 request 的參數放在 header 裡面，然後瀏覽器就會先用 option 的 method 發送一個 preflight request ，這個 request 只是向
 server 確認我們是否可以接收這個 response，如果可以的話，瀏覽器才會把我們真正的 request 送出。

沒有通過 preflight request 有可能是因為 [[跨來源資源共用（CORS）]]的原因等等。

#request 