var tipuesearch = {"pages": [{'title': 'About', 'text': '網頁: 請填入目前網站所在的 URL,  https://mde.tw/cmsimde_site \n 網誌: 請填入目前網站所在的 URL/blog,  https://mde.tw/cmsimde_site/blog \n 簡報: 請填入目前網站所在的 URL/reveal,  https://mde.tw/cmsimde_site/reveal \n 倉儲:\xa0 https://github.com/41223144/wcm2024-2 \n 本 cmsimde 網際內容管理系統的對應 Template 倉儲: \n https://github.com/mdecycu/cmsimde_site \n 此 Template 將 cmsimde 作為子目錄而非子模組, 使用者可以依照需求自行修改 \n 倉儲對應網站:  https://mde.tw/cmsimde_site \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'w1', 'text': '第一周主要是建立github帳號並學習維護個人的課程倉儲與網站. \n', 'tags': '', 'url': 'w1.html'}, {'title': 'w6', 'text': '', 'tags': '', 'url': 'w6.html'}, {'title': 'Git 歷史與希望解決的問題', 'text': 'Git 的目標是解決集中式版本控制系統的一些瓶頸，包括： \n 性能問題：集中式版本控制系統在大型專案中操作效率低，尤其是在提交和合併時。 分支和合併操作的複雜性：在集中式系統中，分支和合併操作可能會變得耗時且複雜，過程中容易出現錯誤。 依賴中央存儲庫：集中式系統需要即時與資料伺服器連線，一旦斷線或伺服器故障，可能會導致開發過程中的中斷。 在這些問題的背後，是軟體開發過程的變化和複雜性增加。隨著項目變得越來越大，開發團隊變得分散，需要更靈活和高效率的工具來管理代碼。Git 的分散式架構允許開發人員在沒有連接到中央伺服器的情況下進行本地端操作，並且提供了高效的分支和合併機制，從而更有效滿足了協同需求。 \n 因此，Git 的發展是在不斷變化和擴大的軟體開發生態系統中的一個自然回應，旨在解決集中式版本控制系統所遇到的種種挑戰，並為開發人員提供更好的工具和流程。 \n 再問: 集中式版本控制系統為何在提交與合併上有性能問題? \n 集中式版本控制系統在提交和合併上可能會遇到性能問題，主要是由於以下幾個原因： \n 單一伺服器負載：在集中式版本控制系統中，所有的提交和合併操作都需要與中央伺服器進行連線。當開發人員數量增加，或者在大型項目中進行大量提交和合併操作時，這個中央伺服器可能會成為性能瓶頸，導致提交和合併操作的速度變慢。 \n 網路延遲：因為提交和合併操作需要與中央伺服器進行連線，因此網路延遲也會影響操作的速度。特別是當開發人員分佈在不同的地理位置時，距離和網路品質都可能擴大延遲。 \n 資料傳輸量：提交和合併操作可能涉及大量的資料傳輸，尤其是當提交或合併的檔案很大或者進行多次修改時。這些大量的資料傳輸需要消耗時間與頻寬，進一步影響操作的性能。 \n 鎖定操作：有些集中式版本控制系統在提交和合併時可能會對文件或資料夾進行鎖定，以避免同時進行衝突的操作。這種鎖定操作可能會導致等待時間增加，特別是在多人同時進行操作的情況下。 \n 因此，集中式版本控制系統的性能問題主要是由於其架構設計所導致，即所有操作都必須通過中央伺服器進行。因而限制了系統的擴展性和彈性，特別是在大型或分散式團隊中。 \n 再問: 為何使用 Git 沒有單一伺服器負載問題? \n 使用 Git 沒有單一伺服器負載問題的主要原因是 Git 的分散式架構。在 Git 中，每一位開發人員都擁有一個完整的本地儲存庫（repository），這使得提交和合併操作不需要依賴於單一的中央伺服器。如此一來，就不會出現單一伺服器負載問題。 \n 換言之，當開發人員在本地進行提交時，各協同人員只需將變更提交到自己的本地儲存庫中，而不是向中央伺服器提交。使得提交操作的速度不再受到中央伺服器的限制，而是受到本地計算機的性能限制，一般情況下會比提交到單一伺服器的執行速度快上許多。 \n 當需要與其他開發人員共享變更時，Git 提供了分支和合併的機制，開發人員可以在本地進行分支和合併操作，而不需要直接與中央伺服器連線。使得提交和合併操作可以在本地進行，不受網路延遲和頻寬限制，從而更加快速並提高協同效率。 \n 另外，即使在多人協作的情況下，由於每個開發人員都有自己的本地儲存庫，這些操作可以同步進行，而不會互相干擾或造成壓力集中在單一伺服器上。 \n 因此，Git 的分散式架構使得提交和合併操作不再依賴於單一的中央伺服器，從而消除了單一伺服器負載問題，提高了系統的性能與彈性。 \n', 'tags': '', 'url': 'Git 歷史與希望解決的問題.html'}, {'title': 'Git 如何解決產品設計問題', 'text': '問題: 身為產品開發人員, 使用的是商用封閉的 CAD 套件, 該如何使用 Git 來提升工作效率? \n 使用商用封閉的 CAD 套件，仍然可以使用 Git 來提升工作效率。以下是一些使用 Git 的方式： \n 版本控制: 使用 Git 對 CAD 項目進行版本控制，可以跟蹤每個版本的變更，並輕鬆地回溯到先前的版本。這對於保留歷史記錄、管理修改和恢復意外更改非常有用。 \n 分支管理: 在 Git 中使用分支來進行不同功能或版本的開發。你可以在不同的分支上同時進行不同的實驗和開發工作，而不會影響主要版本的開發。 \n 協作與共享: 透過 Git，團隊成員可以輕鬆地共享各自的工作成果，進行協作開發。每個人可以在自己的分支上工作，然後通過合併請求（pull request）將修改合併到主分支中。 \n 程式審查: 利用 Git 的分支和合併功能進行程式審查。團隊成員可以在專門的分支上提交各自編寫的程式變更，然後其他成員可以查看這些變更，提供意見和建議，最終通過合併到主分支中。 \n 自動化流程: 使用 Git 配合持續集成（CI）和持續部署（CD）工具，自動化 CAD 項目的測試、構建和部署流程。這樣可以節省時間並降低錯誤，同時確保項目的品質和穩定性。 \n 文檔和問題追蹤: 將 CAD 專案的文檔和問題追蹤整合到 Git 庫中，以便於跟蹤和管理。例如: 可以使用 Git 提供的 Wiki 功能來撰寫文檔，並使用 Issue 跟蹤功能來追蹤問題和任務。 \n 因此，即使使用商用封閉的 CAD 套件，Git 仍然可以成為提升工作效率的強大工具，幫助團隊更好地協作、管理和追蹤 CAD 開發專案。 \n 再問: 可是商用 CAD 採用 binary 格式的零件檔案, 在協同產品設計流程中, 該如何使用 Git 提升協同效能? \n 即使 CAD 文件是以 binary 格式保存的，你仍然可以使用 Git 來提升協同效能。以下是一些方法： \n 使用 LFS（Large File Storage）: Git LFS 是一個 Git 擴增模組，專門用於管理大型文件，包括 CAD 文件等二進制文件。透過 Git LFS，可以將大型 CAD 文件存儲在單獨的存儲庫中，而不會將它們放在 Git 存儲庫中，從而減少存儲庫大小和傳輸時間。 \n 拆分項目: 將 CAD 項目拆分為更小的部分，每個部分都是可獨立開發和測試的。這樣可以降低對於 binary 文件的變更衝突，並使得協同開發更加順暢。 \n 定期同步: 要求團隊成員定期將他們的工作同步到 Git 存儲庫中，以便及時發現和解決衝突。透過定期同步，可以最大程度地減少衝突和重複工作。 \n 使用分支: 在 Git 中使用分支來進行不同功能或版本的開發。每個團隊成員可以在自己的分支上工作，而不會影響主要的生產環境。這樣可以提高彈性，同時減少對於 binary 文件的同時修改。 \n 程式審查: 使用 Git 的分支和合併功能進行程式審查。每個成員在完成工作後，可以提交程式變更到自己的分支，然後發起合併請求。其他成員可以查看這些變更，提供意見和建議，確保程式的品質和穩定性。 \n 文件管理: 使用 Git 存儲庫中的 Wiki 功能來管理 CAD 文件的相關文檔，包括設計文檔、變更日誌等。這樣可以使得團隊成員更容易地找到並理解 CAD 文件的相關訊息。 \n 因此，即使 CAD 文件是以 binary 格式保存的，仍然可以通過合理使用 Git 和相應的工具來提升協同效能，降低衝突和重複工作，從而更加高效地進行協同產品設計流程。 \n 再問: 若設計流程採用 Siemens NX 設計零組件, 若將每一個零組件的設計過程採 NXOpen Python 程式存檔, 並且透過設計參數進行零組件調控, 就採用 Git 分散式版本管理系統上, 會比直接使用 binary 格式更有效率嗎? \n 在將每個零組件的設計過程以 NXOpen Python 程式存檔的情況下，使用 Git 分散式版本管理系統相比直接使用 binary 格式可能會更有效率。這主要是因為： \n 可讀性和可比較性：使用 NXOpen Python 程式存檔可以使得零組件的設計過程更具有可讀性和可比較性。相比於 binary 格式，Python 程式碼可以被版本控制系統更好地管理，使得團隊成員可以更容易地查看、比較和理解每個零組件的設計過程。 \n 易於跟蹤和管理：Python 程式存檔可以更輕鬆地跟蹤和管理設計過程中的變更。Git 可以記錄每次提交的修改，包括添加、刪除和修改的程式碼行數，從而使得團隊可以清楚地了解每個零組件的設計歷史和演變過程。 \n 設計參數的調控：使用 Python 程式存檔可以更靈活地調控零組件的設計參數。可以使用程式碼來自動化設計過程，並且通過修改參數來調整零組件的性能和外觀，從而更有效地進行重複性流程設計以及最佳化。 \n 協同開發與程式審查：與 binary 格式相比，Python 程式存檔更適合進行協同開發與程式碼的審查。團隊成員可以在版本控制系統中查看並評論每個零組件的設計程式碼，提供意見和建議，從而確保設計的品質和一致性。 \n 因此，使用 NXOpen Python 程式存檔並結合 Git 分散式版本管理系統可以更有效地管理和控制零組件的設計過程，提高團隊的協同效率和設計品質。 \n', 'tags': '', 'url': 'Git 如何解決產品設計問題.html'}, {'title': 'cmsimde', 'text': "SMap  - SiteMap - 依照階次列出網站的所有頁面. \n EditA  - Edit All page - 將所有頁面放入編輯模式中, 主要用來處理頁面搬遷, 刪除或決定衝突頁面內容版本. \n Edit  - Edit page - 先選擇要編輯的單一頁面後, 再點選 Edit, 即可進入單一頁面的編輯模式. \n Config  - Configure Site - 編輯頁面標題與管理者密碼. \n Search  - 動態頁面內容的關鍵字搜尋. \n IUpload  - Image file Upload - 圖檔的上傳功能, 可以上傳 jpg, png 與 gif 檔案, 其中若在手機上傳圖檔, 系統會自動將圖片檔案縮小為 800x800 大小. \n IList  - Image file List - 列出可以直接在頁面編輯模式中引用的圖片檔案. \n FUpload  - File Upload - 一般檔案的上傳功能, 目前可以上傳的檔案副檔名包括 'jpg', 'png', 'gif', '7z', 'pdf', 'zip', 'ttt', 'stl', 'txt', 'html', 'mp4' 等, 使用者可以自行修改. \n FList  - File List - 列出可以直接在頁面編輯模式中引用的上傳檔案. \n Logout  - 登出頁面編輯模式. \n Convert  - 將動態網站中位於 config/content.htm 檔案, 透過分頁設定轉為 content 目錄中的靜態網頁. \n acp  - git add, git commit 與 git push, 通常只有在 localhost 或自架主機上利用網頁表單協助將倉儲改版內容推向 Github 倉儲. \n SStatic  - Start Static Site - 利用 Python 啟動網站伺服功能, 可以讓使用者檢查轉檔後的靜態網站內容. \n RStatic  - Replit Static Site URL - 僅用於 Replit 模式, 當使用者按下 SStatic 後, 可以按下 RStatic 進入當下尚未推向 Github Pages 的靜態網站. \n 80  - 由 init.py 中 static_port 所決定的連結字串, 一般不使用 80, 只有在 Replit 中為了與動態網站共用 port, 才特別設為 80. \n \n", 'tags': '', 'url': 'cmsimde.html'}, {'title': 'Replit', 'text': 'https://replit.com \n 利用 init_replit 指令安裝所需 Python 模組 chmod u+x init_replit ./init_replit \n On Replit: \n .replit: python3 main.py \n chmod u+x cms init_replit \n ./init_replit \n for cmsimde_site (not needed): git submodule update --init --recursive \n for cmsimde: pip install flask flask_cors bs4 lxml pelican markdown gevent \n password generator:\xa0 https://mde.tw/cmsite/content/Brython.html?src=https://gist.githubusercontent.com/mdecycu/b92b16621dd0246c352cf13d6463b333/raw/0bfa669750aba3abe48554509bbd43d65b6e5c82/hashlib_password_generator.py \xa0 \n \n for IPv6 only Ubuntu: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.com ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p for Replit: .ssh 目錄中的 config, 將 SSH session 名稱設為 github.com: Host github.com User git Hostname github.co #since Replit works for IPv4, therefore no ProxyCommand setting needed #ProxyCommand /usr/bin/ncat --proxy p4.cycu.org:3128 --proxy-type http %h %p \n \n \n', 'tags': '', 'url': 'Replit.html'}, {'title': 'Brython', 'text': 'https://en.wikipedia.org/wiki/Python_(programming_language) \n Examples: \n https://gist.github.com/mdecycu/d9082d678096bd58378d6afe2c7fa05d \n https://www.geeksforgeeks.org/python-programming-examples/ \n https://www.programiz.com/python-programming/examples \n https://www.freecodecamp.org/news/python-code-examples-sample-script-coding-tutorial-for-beginners/ \n Python Tutorial: \n https://docs.python.org/3/tutorial/ \n An informal introduction to Python \n Indentation (Python 採 4 個 Spaces 縮排, 以界定執行範圍) \n Variables ( Python Keywords ) \n Comments (# 單行註解, 三個單引號或三個雙引號標註多行註解) \n Numbers  (整數 int(), 浮點數 float()) \n Strings  (字串) \n print (Python 內建函式,  print()  函式) \n Python control flow tools \n for \n if \n range \n open \n read \n lists \n tuples \n dictionaries \n functions \n try ... except \n break \n pass \n classes \n 這個頁面 demo 如何在同一頁面下納入多個線上 Ace 編輯器與執行按鈕 ( practice_html.txt  動態頁面超文件). \n practice_html.txt  動態頁面超文件應該可以在啟動 Brython 時, 設定將 .py 檔案放入 downloads/py 目錄中引用. \n 亦即將所有對應的 html 也使用 Brython 產生, 然後寫為  class  後, 在範例導入時透過  instance  引用. \n <!-- 啟動 Brython -->\n<script>\nwindow.onload=function(){\nbrython({debug:1, pythonpath:[\'./../cmsimde/static/\',\'./../downloads/py/\']});\n}\n</script> \n 從 1 累加到 100: \n 1 add to 100 \n 將 iterable 與 iterator  相關說明 , 利用 Brython 與 Ace Editor 整理在這個頁面. \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris Rotating Block \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};