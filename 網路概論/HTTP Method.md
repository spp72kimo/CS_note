[[HTTP Protocol]] 裡面的一種要求動作協定，在 request 裡面增加一組動詞，告知 server 我們要做甚麼..
其中包含

- GET：獲取資料，因為只是要取得資料而已，所以沒有 body 的部分
- POST：傳送資料，因為是傳送資料，所以 body 內要按照固定的格式寄送給 server，可以參考 [[POST  常見的四種提交數據的方式]]
- PUSH：修改整筆資料，透過 PUSH 修改的資料，整筆資料都會變更
- PATCH：修改單筆資料，其他資料不會受影響
- DELETE：刪除資料
- HEAD：只要取得 response 的 headers 就好，沒有要 body 的部分
- OPTIONS：詢問 srever 有甚麼樣的動作服務 (HTTP Method)

#request 
#網路概論 
