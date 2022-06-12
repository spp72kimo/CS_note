# Babel
因為前端的各種技術實在是進步太快了，所以瀏覽器很多時候沒辦法跟上前端的技術或是新的語法等等，這時候就會出現各種工具幫助我們把這些新的語法轉變成舊語法，讓瀏覽器可以讀懂，而 Babel 就是其中一種工具。

他幫我們把新的 JavaScript 指令轉成較舊版的指令，讓瀏覽器可以讀懂並且順利執行。

### Babel 的安裝方法
先用 npm 安裝 babel 的module
- npm install --save-dev @babel/core @babel/cli @babel/node
- 再來安裝舊版的設定檔  npm install @babel/preset-env --save-dev
- 開一個新檔案，檔名為 "babel.config.json"
- 新增程式碼到這個檔案裡面
	- { "presets": \["@babel/preset-env"\] }
- 之後用 npx babel-node 執行 js 檔案就可以了


#程式轉檔工具