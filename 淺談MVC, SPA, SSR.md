## MVC
Model-View-Controller

主要是把複雜的網頁分出架構來，讓負責不同功能的程式碼放在不同的區塊，使得管理賞面能夠較好管理，要區分問題並且修改程式碼時也可以快速找到問題的程式碼。
大致上分成 ：
- controller
- views
	- component (react)
- model (資料庫)

---

## SPA
Single Page Application

大部分傳統的網站屬於 MPA (Mutiple Page Application)，使用者發出任何的 request，由 Server 接收之後，經由網址的傳遞的參數或路徑，再判斷該如何處理，並且回傳 response，但這中間總是會重新的 render 網頁，使得使用體驗上會有一段空白的 loading 時間，感覺使用起來沒有連貫的感覺。

而 SPA 就是一種解決這個問題的方法，把大部分使用者的 reuquest 交給前端的 JavsScript 做判斷，所以整個網頁不會重新的 render，因為所有的內容都是由前端的 Js 動態產生，所以 SPA 還有一個特點，就是只會有單一的網頁，由單一的網頁來處理所有的 request。

ex.線上音樂網站
線上的音樂網站就是一個很經典的例子，因為我們在線上一邊聽歌，一邊找尋其他曲目時，音樂並不會暫停撥放，但是曲目卻可以因為我們的 request 不斷更新。


##### SPA 可能會遇到的問題
因為大部分的網頁內容都是由前端的 Js 動態產生，換個方式說，就是網頁的原始碼可能都會看不到網頁內容，或是看不到完整的網頁內容。
這樣會造成網路搜尋引擎的爬蟲程式沒辦法很精確地去辨別這個網站擁有甚麼樣的內容，使得 SEO 的搜尋效率不高。

---
## SSR
Server Side Render
而要解決這樣的方法，就是當使用者第一次連進來這個網頁的時候，先由 server 端來進行 render ，之後再由前端的 Js 來做 render，這樣就可以保證程式碼可以擁有較完整的內容來讓搜尋引擎爬蟲。


參考文章：[跟著小明一起搞懂技術名詞：MVC、SPA 與 SSR](https://hulitw.medium.com/introduction-mvc-spa-and-ssr-545c941669e9)