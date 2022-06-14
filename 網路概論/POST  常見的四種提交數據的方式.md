# POST 常見的四種提交數據的方式
目前常見的 POST 提交數據的四種方式有：( Content/Type )

- application/x-www-form-urlencoded
- multipart/form-data
- application/json
- text/xml


一般我們經由 HTTP protocol 來傳輸時，傳送的資料會有固定規範的格式，如下
\<method\>  \<request\>  \<version\>
\<headers\>
\<entity-body\>

因為 HTTP protocol 並沒有規範我們要以甚麼編碼來傳送資料，所以我們必須要靠Content/Type 告知 srever 我們 post body 裡面是用甚麼樣的編碼方式，才能解析。

---
### application/x-www-form-urlencoded
如果沒有特別指定 Content/Type 的話，一般都是用這個編碼方式


### multipart/form-data
一般用來傳送檔案類型的資料


### application/json
現在很流行的傳送方式，類似 Js 的 Object 的格式，key: value 的方式


### text/xml
最傳統的 xml 格式的傳送方式，類是 html 的一種 markup language


本篇文章節錄自：[四種常見的 POST 提交數據方式](https://www.796t.com/content/1536302734.html)

#POST
#request 
#headers