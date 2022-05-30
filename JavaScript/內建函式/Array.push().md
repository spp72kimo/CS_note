## Array.push()
將資料從後面塞進去給陣列，除了會改變原有的陣列之外，也會回傳改變之後的長度。
```js
var arr = [1, 2, 3, 4];
arr.push(5);
console.log(arr);

//  [1, 2, 3, 4, 5]
```

## Array.pop()
移除並取出陣列的最後一個元素，原本陣列會被改變。
```js
var arr = [1 , 2, 3, 4, 5];
console.log(arr.pop());
console.log(arr);

//  pop element: 5
//  new length: 1,2,3,4
```

## Array.reverse()
反轉陣列的內容
```js
var arr = [1,2,3,4,5];
arr.reverse();
console.log(arr);

//  [ 5, 4, 3, 2, 1 ]
```

## Array.shift()
