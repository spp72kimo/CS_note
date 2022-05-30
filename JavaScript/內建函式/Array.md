# Array的內建函式
## Array.join( 連結字元 )
陣列元素結合在一起成字串
```js
var sentence = ["How", "are", "you?"];
console.log(sentence.join(" "));

//How are you?
```

## Array.map( function )
回傳處理過後的陣列
```js
var num = [1, 3, 5];
console.log(num.map(function(x) {
	return x+1;
}));

//  [2, 4, 6]
```

## Array.filter( 條件 )
符合條件的會留下來
ex. 留下奇數
```js
var num = [1, 2, 3, 4, 5, 6];
console.log(num.filter(function (x) {
	return x&1;
}));

// [1, 3, 5]
```

## Array.slice(起始位置, 結束位置)
把陣列切片下來，然後回傳新的 array
```js
var num = [1, 2, 3, 4, 5, 6];
console.log(num.slice(2, 4));

//[3, 4]
```

## Array.splice(開始的 index, 從 index 開始刪除的元素個數, "插入字串")
刪除和新增元素，*會改變原有的陣列*

ex. 替換掉 "are":
```js
var arr = ["How", "are", "you", "?"];
arr.splice(1,1,"dare");
console.log(arr);

//  [ 'How', 'dare', 'you', '?' ]
```
從 index1 開始，刪掉一個元素，所以刪掉 "are"，插入 "dare"

ex. 插入字串
```js
var arr = ["How", "are", "you", "?"];
arr.splice(1,0,"dare");
console.log(arr);

//  [ 'How', 'dare', 'are', 'you', '?' ]
```
在 index1 開始，不刪除元素，加入字串 "dare"，其他往後順移。

## Array.sort()
陣列做排序，*會改變原有的陣列*

預設是照字串做排序，而非數字做排序
詳細可參考[[Array.sort()]]

#內建函式
#array 