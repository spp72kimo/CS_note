# 事件代理 Event Delegation
在一些比較特別的狀況，像是 ol 或 ul 的標籤裡面，會有很多的 li，
如果要在每一個 li 裡面都做監聽的話，就會很麻煩。

我們可以利用 event flow 的機制，所有子元素都會延續父元素的 eventListener，
所以可以直接在父元素設定 eventListener，這樣底下的子元素同樣都會有相同的 eventListener，這就是事件代理。

事件代理機制除了可以用在底下比較多的 item 之外，也可以應用在動態新增的元素上面，
因為父元素的 eventListener ，所以子元素就算是新增也都會在父元素的 eventListener 之內。

這邊附上事件代理 Event Delegation 的範例
```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
	<link rel="stylesheet" href="./css.css">
	<style>
		
	</style>
</head>
<body>
	<div class='container'>
		<button class="add_btn">增加</button>
	</div>
</body>
<script>
	let num = 1;
	document.querySelector('.add_btn').addEventListener('click',
		function(e) {
			let btn = document.createElement('button');
			btn.setAttribute('data-value', num);
			btn.classList.add('btn');
			btn.innerText = num++;
			document.querySelector('.container').appendChild(btn);
		}
	)

	document.querySelector('.container').addEventListener('click',
		function(e) {
			if (e.target.classList.contains('btn')) {
				alert(e.target.getAttribute('data-value'));
			}
		}
	)
</script>
</html>
```
把 eventListener 的機制設定在父元素 .container 上面，接下來新增的按鈕都會有父元素的 eventListener ，接下來只要用 if 判斷是否是按到 .btn 的按鈕，是的話就執行 event 就可以了！

#DOM 
