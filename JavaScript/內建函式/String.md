# String 的內建函式
## String.toUpperCase()
將所有字母轉換成大寫
## String.toLowerCase()
將所有字母轉換成小寫
## String.charCodeAt()
回傳字母的 ASCII 的值
```js
console.log("A".charCodeAt())  // 65
console.log("Z".charCodeAt())  // 90
console.log("a".charCodeAt())  // 97
console.log("z".charCodeAt())  // 122
```
所以可以知道小寫字母介在 97 ~ 122 之間，大寫字母介在 65 ~ 90 之間

## String.fromCharCode()
### 字母大小寫轉換
因為大寫和寫小字母的 ASCII 剛好相差 32，所以可以對應大小寫。
大小寫判斷：
```js
var char = "F";
var code = char.charCodeAt()
if(65 < code && code < 90){
	console.log("這是大寫")
} else {
	console.log("這是小寫)"
}
//  這是大寫
```
## String.indexOf()
查詢裡面是否有指定字串，會回傳第一個關鍵字字母的位置
```js
var sentence = "How are you?";
console.log(sentence.indexOf("are"));  // 4, 起始的索引值是 0
```

字串也可以用陣列的方式來取值
```js
var sentence = "Hello!!";
console.log(sentence[0]);  // H
```
## String.replace(關鍵字, 要換成的字)
可以替換指定的字串，但只能換第一個找到的關鍵字。
```js
var sentence = "What will you do tomorrow?";
console.log(sentence.replace("tomorrow", "today"));

//  What will you do today?
```

若要替換文內所有的字串，需要搭配正規表達式。
## String.split(" 要切割的字元 ")
切割字串
```js
var sentence = "How are you?";
console.log(sentence.split(" "));

//  ["How", "are", "you?"]
```
較常用在 CSV 檔案的逗號分隔
```js
var data = "data1, data2, data3, data4";
var parseData = data.split(",");
console.log(parseData);

//  [ 'data1', ' data2', ' data3', ' data4' ]
```
## String.trim()
去除兩邊的空白
```js
var sentence = "   steven   ";
console.log(sentence.trim());

//steven
```
## String.length
可以用陣列的方式取出字串的單一字母
ex.
```js
var name = "Steven";
for(var i = 0; i < name.length; i++) {
	console.log(name[i])
}

//就會逐一取出每個字母
```

#內建函式