# Event bubbling
因為 html 裡面本身是階層式的關係，所以如果有在重複區域監聽，就會發生 Event bubbling

在 DOM 裡面有所謂的 event flow：
- Capture Phase
- Target Phase
- Bubbling Phase

如下圖

<img src="https://www.w3.org/TR/DOM-Level-3-Events/images/eventflow.svg" width="400px">
<!-- ![eventflow](https://www.w3.org/TR/DOM-Level-3-Events/images/eventflow.svg) -->

事件會先經由 Capture Phase 往下捕獲，直到 Target 之後再往上 Bubbling 傳遞
所以如果是在下層的元素觸發了 event ，上層的元素如果也有 eventListener 的話，就會連帶被觸發，這就是所謂的 Event Bubbling。

ps. 我們可以利用這樣的 event flow 的特性來做所謂的[[事件代理]]


---
### e.stopPropagation()
中斷事件傳遞

一般我們都會把 stopPropagation() 放在底層監聽的 target 上面，阻止上層若有 eventListener 產生的重複觸發。

但同樣的，我們也可以在 Capture Phase 就中斷事件傳遞，讓下層的 eventListener 無法被捕獲到，若要這樣，可以在 addEventListener() 加入第三個 boolean 參數

#### addEventListener('click', function, true)
- true:  Capture Phase
- false:  Bubbling Phase (預設)

把第三個參數設為 true，這樣就可以直接在 Capture Phase 中斷傳遞，換句話說，就是無法繼續往下捕獲 event。

但是設定 stopPropagation() 的該層級，還是可以觸發 event 的！就算該元素有一個以上的 eventListener() ，則都會觸發。
若要指定指觸發一個 eventListener() 的話，可以加上...

### e.stopImmediatePropagation()
這個函式就是只會執行該 eventListener，該元素的其他 eventListener 都不會觸發。


#DOM 
