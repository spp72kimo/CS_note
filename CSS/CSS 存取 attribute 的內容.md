# CSS 存取 attribute 的內容
如果 html 裡面 CSS 的設定是
```html
<div data-size="medium" data-color="red"></div>
```

在 CSS 可以用 attr 來選取標籤並指定樣式
```css
/*選定特定的 CSS*/
div[data-size="medium"] {
	width: 100px;
	height: 50px;
}

/*取得 data-size 的內容*/
div::after {
	content: attr(data-size)
}


```

#CSS 
