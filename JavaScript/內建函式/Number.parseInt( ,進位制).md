# Number.parseInt("",進位制)

Number內建函式，parseInt("", ) 會把輸入進去的數字解析成指定的進位系統之後，在回傳出十進位的值。

所以可以當成幫我們把各種進位換算成十進位給我們。

但是，**傳入的數字必須要為字串**，若不是字串，則 Js 會先轉換為字串之後在做解析。

```js
parseInt("1100", 2);   // 12
```

ps. parseInt() 是一個 Global Function.
其他 Number 函式可參考 [[Number]]

#內建函式