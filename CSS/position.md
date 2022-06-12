# position
### static
最原始預設的 position，無法調整任何位置的設定


### relative
可以調整位置設定，會根據原本所在的位置做偏移


### fixed
根據實際瀏覽視窗的 viewport 做定位，所以不管滾動軸如何移動，都會維持在固定的位置


### absolute
絕對定位，會根據最近的參考點來做定位 (relative)，並且不會在整個 normal document flow 裡面


### sticky
根據 top 設定的位置，當瀏覽器滾動達到 top 設定的位置之後，就會黏住維持在固定的地方，不會跟著瀏覽器做滾動。( 變成像是 static 的樣子 )

#CSS 
