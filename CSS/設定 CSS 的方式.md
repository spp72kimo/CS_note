# 設定 CSS 的方式
有三種設定 CSS 的方式

### 行內設定
直接在 html 的標籤做設定 (inline style)
```html
<div style="background:blue">
	Hello!
</div>
```

### 包在 head 裡面
```html
<head>
	<style>
		div {
			background:blue;
		}
	</style>
</head>
```

### 設定在另外一個檔案引入近來
```html
<head>
	<link rel="stylesheet" href="./style.css" />
</head>
```

style.css
```css
div {
	background:blue;
}
```

#CSS

