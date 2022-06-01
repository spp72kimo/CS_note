# Number 的範圍
在 JS 中的 number 沒有分 int 或是 float，
而 number 在 Js 中固定都是用 8bytes 來存放。

 1 byte = 8 bits
 8 bytes = 64 bits

所以在 JS 中是有 64 個位元來表示 number，
其中第 0 個位元用來表示正負
0: 正數，1: 負數

接下來的 1 ~ 11 位元表示指數
剩下的 12 ~ 63 位元表示小數 (有效數字)，所以總共有 52 個位元來存放，再加上電腦有內定一個位元給有效數字 (預設是1，此位元不存在這 52 位裡面)，所以總共有 53 個位元來存放數字。

所以 number 的範圍是：
-2 ^ 53 ~ Number ~ 2 ^ 53 -1
這裡說的範圍是 Number.MAX_SAFE_INTEGER，是指在 Js 中可以準確運算的安全範圍。
詳細可參考：[Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)

## 浮點數運算的誤差
由於電腦是二進位存放的關係，只能用逼近的方式去代表浮點數，又因為最多只能存放 53 個 bits，所以最後會用截斷的方式來代表浮點數，因此會產生誤差。

要解決這樣誤差的方式，可以用 Number.tofixed(到第幾位)，會用四捨五入的方式擷取到指定的位數。

參考文章：[# JavaScript Number範圍及超出範圍運算方法](https://www.796t.com/content/1546586494.html)

#DataType