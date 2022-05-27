# GitHub
## 初始化

**git remote add origin  `#GitHub提供的網址`**
- 設定一個名為 origin 的遠端 git 網址

**git branch -M main**
- 強制把branch 名稱更改成 main，並把 startpoint 設定成main

**git push -u origin main**
- 設定預設上傳的地方是 origin，將本端的 main 分支上傳到 origin


***
## 將檔案上傳到 Github
**git push** 
* 本地端完成 *commit* 之後就可以上傳到GitHub了，指令為`git push origin main`
* 若要上傳其他分支則用 `git push origin #分支名稱`

**git pull**
- `git pull origin main` 將遠端的版本拉回來本地端
- 若有 conflict ，一樣用 *git status* 檢查，逐一確定有conflict的檔案，最後再commit 一次就好。

**git clone**
- 可以用 `git clone #網址` 將遠端的 repository 複製到本地端來，但是因為不是自己的 repostory 所以無法 push 出去。
- 可以在 GitHub 上面用 fork 的方式，複製成自己的 repostory ，然後再 `git clone #網址` 複製到自己的本地端，有任何修改都可以再 push 到遠端自己的 repostory。

---
## [[多人協作]]

多人協作可以先將對方的 repostory 先 fork 下來之後，先建立一個新的 branch，然後當自己完成 commit 之後，再把這個 branch push到遠端，並在 GitHub 上面做 pull request，對方同意之後，就可以把你的 branch merge 到他的 main 裡面了。

---

#github
#Git
#gitClone
#gitPull