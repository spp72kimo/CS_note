# Psuedo elements
### ::after 和 ::before
通常可以用來標示金額前面的價錢符號，或是單位等等...

```html
<div class="price" dollars=" NTD">399</div>
<div class="price" dollars=" RMB">1880</div>
<div class="price" dollars=" JPN">2680</div>
```

```css
.price::before {
	content: "$ ";
}

.price::after {
	content: attr(dollars);
	color: red;
}
```
ps. content 裡面一定要放東西，**空字串也可以**，如果都沒有就不會有這個偽元素了。

#CSS 
