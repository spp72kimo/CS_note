# pug
*樣板語言*

### a(href="http//:...." width="")
連著小括號設定屬性

### p 文字內容
空一格設定內文

### 往內縮排代表包覆底下的元素

以下範例：
```pug
a(href="https://....")
	.namecard
		.circle.circle1
		.circle.circle2
	h2 名稱
		span english name
	h5 職稱
	hr
	p 自我介紹內容
```

就會轉變成：
```html
<a href="https://....">
  <div class="namecard">
    <div class="circle circle1"></div>
    <div class="circle circle2"></div>
  </div>
  <h2>名稱<span>english name</span></h2>
  <h5>職稱</h5>
  <hr/>
  <p>自我介紹內容</p></a>
```

ps. pug 同樣有支援 [[Emmet]]

#HTML 
#preprocessor