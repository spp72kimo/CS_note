## :hover
當滑鼠移上去的時候會產生的變化

```css
div:hover {
	background: green;
}
```

## :nth-child
相對於 parent elements ，的第 n 個 child
```html
<div>
	<span>span1</span>
	<span>span2</span>
	<span>span3</span>
	<span>span4</span>
</div>
```

```css
div span:nth-child(n) {
	background: blue;
}
```
- div span:nth-child(1)：在 div 底下，是 span 的第一個元素


## :not(selector)
選取不是特定標籤的元素
```css
:not(p) {
	color: red;
}
```
選取不是 p 的所有元素


## :focus
針對表單 input 框框如果被 focus 的時候，大部分預設會有 outline，
可以設定 outline: none 就不會有預設的效果了。

#CSS 
