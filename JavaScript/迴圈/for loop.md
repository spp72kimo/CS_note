# for loop
for loop 的寫法是：

for( i 的起始值 ; i的中止條件 ; 每次 i 的變化) {
	程式碼
}

```js
for (var i = 1; i <= 100; i++) {
	console.log(i)
}

console.log("i = ", i);

// 1,2,3,4,....,100
// 101
```

也可以搭配陣列來作取值的動作：
```js
scores = [89, 64, 73, 92];

for (var i = 0; i < scores.length ; i++) {
	console.log(scores[i]);
}

// 89
// 64
// 73
// 92
```

#length 查詢陣列的長度

#迴圈