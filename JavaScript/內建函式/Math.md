# Math 內建函式
## Math.PI
顯示圓周率PI

## Math.ceil()
小數無條件進位成整數
```js
console.log(Math.ceil(3.4));  // 4
```

## Math.floor()
小數無條件捨去成整數
```js
console.log(Math.floor(2.8));  // 2
```

## Math.round()
小數四捨五入成整數
```js
console.log(Math.round(2.4));  // 2
```

## Math.sqrt()
開根號

## Math.pow(底數, 次方)
計算底數的次方
```js
console.log(Math.pow(2, 10));  // 1024
```

## Math.random()
產生 0 ~ 1 的隨機小數，不包含 1
```js
var num = Math.random() * 100;
num = Math.floor(num) + 1;
console.log(num);  // 1 ~ 100 之間
```


#內建函式