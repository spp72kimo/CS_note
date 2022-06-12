# e.preventDefault()
- 防止預設動作發生，一般用來阻止表單發送，可以用來檢查表單資料內容是否正確再發送
- 也可以阻止點及超連結等等
- 或是設定按下某些按鍵不能觸發預設行為
```js
const element = document.querySelector('input[type=text]');
element.addEventListener('keypress', function(e) {
	if(e.key==='a') {
		e.preventDefault();
	}
})
```
keypress 事件，當按下按鍵可以指定某些按鍵的觸發事件 (e.key)

#DOM 
#keypress
