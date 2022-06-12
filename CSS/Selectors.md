### Universal selectors
```css
* {
	color: red;
}
```

### 標籤 Selector
會選擇所有的標籤
```css
div {
	color: red;
}
```

### id Selector
```html
<div id="text1">
	Hello!
</div>
```

```css
#text1 {
	color: green;
}
```
針對單一的 id 做樣式設定

### class selector
```html
<div class="bg-yellow text-green">
	Hello!
</div>
```

```css
.bg-yellow {
	background: yellow;
}

.text-green {
	color: green;
}
```
一個標籤可以有一個以上的 class 來做不同的設定
也可以不同的標籤有相同的 class


### attribute selector
通常用在表單內的元素
```css
input[type="text"] {
	color: red;
}

input[name="username"] {
	color:green;
}

```


### 同時符合多個條件的 Selecrtor
```html
<div class="big-head bg-color">
	Hello!
</div>
```

```css
div.big-head.bg-color {
	background: green;
}
```
要符合多個條件的話，中間不能有空格，要連在一起寫
### 選取標籤底下的元素
```html
<div class="level-1">
This is level 1
	<span class="level-2 A">This is span</span>
	<div class="level-2">
	This is level 2
		<span class="level-3 A">
	
		This is Level 3
		</span>
		<span class="level-1">
		This is leve-1 in level-3
		</span>
	</div>
</div>
```

```css
div .level-1 {
	color: green;
}
/* 只要在 div 底下所有的 levle-1 的標籤都套用這個設定 */
/* This is level 1 */
/* This is levle 1 in level 3 */


.level-11 > .A {
	background: blue;
}
/* 只有在.level-1 的下一層的 .A 的標籤才會套用設定 */
/* 只有 This is span  */
/* 所以 level-3 的沒有 */
```

### 選取標籤旁邊的元素
+：選取標籤旁邊的元素
~：選取標前忙邊所有的元素
```html
<div class="A">
This is A
</div>
<div class="B">
This is B
</div>
<div class="C">
This is C
</div>
```

```css
.A + div {
	background: blue;
}
/* This is B 會變藍色 */

.A ~ div {
	background: blue;
}
/* This is B */
/* This is C */
/* 都會變藍色 */
```



#CSS 
