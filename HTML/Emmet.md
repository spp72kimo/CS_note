# Emmet
縮寫模組

 ex. 
### .card>h2.title+hr+p.content
 ```html
 <div class='caed'>
	 <h2 class='title'></h2>
	 <hr />
	 <p class='content'></p>
 </div>
```

 ### .card\*2>h2.title+hr+p.content
 .card 後面加上 \*2，就是重複 2 個
 ```html
<div class='caed'>
	 <h2 class='title'></h2>
	 <hr />
	 <p class='content'></p>
 </div>
 <div class='caed'>
	 <h2 class='title'></h2>
	 <hr />
	 <p class='content'></p>
 </div> 
```

 ### .card\*2>h2.title{標題}+hr+p.content{內文}
 ```html
 <div class='caed'>
	 <h2 class='title'>標題</h2>
	 <hr />
	 <p class='content'>內文</p>
 </div>
 <div class='caed'>
	 <h2 class='title'>標題</h2>
	 <hr />
	 <p class='content'>內文</p>
 </div> 
```

### ul>li{預設選項$}\*6
```html
<ul>
	<li>預設選項1</li>
	<li>預設選項2</li>
	<li>預設選項3</li>
	<li>預設選項4</li>
	<li>預設選項5</li>
	<li>預設選項6</li>
</ul>
```

### img\[src="http://......." alt="" width=""\]
設定 img 的屬性

#HTML 
#preprocessor 