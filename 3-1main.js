const newtask = document.getElementById('newtask')

const add = document.getElementById('add')

add.addEventListener('click', () => {
  if (newtask.value === '') {
    return
  }

  const list = document.getElementById('list')

  //tbodyの中の要素の数を取得して連番を取得します
  const id = list.children.length + 1

  const comment = newtask.value

  // 作業中
  const workButton = document.createElement('button')

  workButton.innerText = '作業中'

  //削除
  const deleteButton = document.createElement('button')

  deleteButton.innerText = '削除'

  // テーブルの行に必要なデータの配列を作成します
  const columns = [id, comment, workButton, deleteButton]

  //　テーブルの行を作成します
  const tr = document.createElement('tr')

  // 配列の中身を一つずつ取り出して処理をします
  columns.forEach((column) => {
    // テーブルの列を作成します
    const td = document.createElement('td')

    // HTMLElement　すべてのHTML要素のベースクラスです。色々な HTML要素 がこれを継承しています
    // instanceof オブジェクトが自身のプロトタイプにコンストラクタの prototype プロパティを持っているかを確認します。戻り値はブール値です。
    if (column instanceof HTMLElement) {
      td.appendChild(column)
    } else {
      td.innerText = column
    }

    // 行に列を追加します
    tr.appendChild(td)
  })

  // テーブルに行を追加します
  list.appendChild(tr)

  newtask.value = ''
})