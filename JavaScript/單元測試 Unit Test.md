# 單元測試 Unit Test
我們可以用單元測試來測試我們寫的程式是否符合預期，也可以跑一些 edge case，
像是 jest 就是一個單元測試的框架。
經過 npm 或是 yarn 安裝在本地端之後，把測試檔寫在副檔名為 test.js 就可以了！
並且在測試檔內引入我們要測試的 js 檔案。

ex.
```js
const compareMax = require("./compare");

describe("第一個群怎的測試", function(){
	test("測試哪個數字比較大",function(){
		expect(compareMax(10, 3)).toBe(10);
	} );
});
```

describe 是把測試單元群組化起來，
test 就是測試一個單元，
單元可以說是一個 function


使用 jest 時，必須在 package.json 裡面加上，才能找到 node module 裡面的執行檔
```JSON
{  
	"scripts": {  
	"test": "jest"  
	}  
}
```

之後就可以在 CLI 輸入 `npm test 檔案名稱` 就可以了
#jest 
