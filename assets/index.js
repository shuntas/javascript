function pullDown() {

  const pullDownButton = document.getElementById("lists")

  const pullDownParents = document.getElementById("pull-down")

  const pullDownChild = document.querySelectorAll(".pull-down-list")

  const currentList = document.getElementById("current-list")
  // console.log(currentList)



  pullDownButton.addEventListener('mouseover', function () {
    this.setAttribute("style", "background-color:#FFBEDA;")
  })

  pullDownButton.addEventListener('mouseout', function () {
    this.removeAttribute("style", "background-color:#FFBEDA;")
  })

  pullDownButton.addEventListener('click', function () {
    // プルダウンメニューの表示と非表示の設定
    if (pullDownParents.getAttribute("style") == "display:block;") {
      // pullDownParentsにdisplay:block;が付与されている場合（つまり表示されている時）実行される
      pullDownParents.removeAttribute("style", "display:block;")
    } else {
      // pullDownParentsにdisplay:block;が付与されていない場合（つまり非表示の時）実行される
      pullDownParents.setAttribute("style", "display:block;")
    }
  })

  // コースの値を取得し表示する
  pullDownChild.forEach(function (list) {
    // console.log(pullDownChild)
    list.addEventListener('click', function () {
      // innerHTMLを使用すると、HTML要素の取得や書き換えを行うことができます。
      // 例えば、以下のように指定した要素の文字列を取得・操作することができます
      value = list.innerHTML
      // リスト1,2,3,4が取れる
      currentList.innerHTML = value

      console.log(currentList)
    })
  })

}

window.addEventListener('load', pullDown)
