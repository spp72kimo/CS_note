## :hover
當滑鼠移上去的時候會產生的變化

```css
div:hover {
	background: green;
}
```

## :nth-child
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
- :nth-child(1)：div 底下的第一個元素，又是 span 標籤的
- :nth-child(2)：div 底下的第二個元素，又是 span 標籤的
- :nth-child(2n)：div 底下是雙數的元素，又是 span 標籤的
- :nth-child(3n)：div 底下第 3,6,9... 的元素，又是 span 標籤的

#CSS 
