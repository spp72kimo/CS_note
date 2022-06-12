
# addEventListener()
在 DOM 裡，每個 element 都有 addEventListener() 這個函式可以來監聽事件

```html
<div>
this is a div
</div>

<script>
	const div = document.querySelector('div');
	div.addEventListener("click", fumction() {
		alert("Hello!");
	})
</script>

```

經過 addEventListener() 可以得到一個 event 的參數
```html
<head>
	<style>
		.change_backGroundColor {
			background-Color: green;
		}
	</style>
</head>

<body>
</body>

<script>
	const body = documenet.querySelector('body');
	body.addEventListener('click', function(e) {
		console.log(e.target)
		body.classList.toggle('change_backgroundColor');
	})
</script>
```
e.target 可以回傳觸發 event 的主要元素

#DOM 
