const newtask = document.getElementById('newtask');
const add = document.getElementById('add');
const tasklist = document.getElementById('list');

const taskarray = [];

//削除ボタンの作成
const createDeleteButton = (deletetask) => {
  const deleteButton = document.createElement('button');
  deleteButton.innerText = '削除';
  deletetask.appendChild(deleteButton);
}
//作業中ボタンの作成
const createStatusButton = (status,taskstatus) => {
  const statusButton = document.createElement('button');
  statusButton.innerText = taskstatus;
  status.appendChild(statusButton);
}

//タスクを追加する
const AddTasks = () => {
  tasklist.innerText = '';
  taskarray.forEach((taskadd) => {
    const taskId = tasklist.rows.length;
    //最後の行に追加する
    const row = tasklist.insertRow(-1);
    row.classList.add('tasks');//claslist.add()は今回はidで要素を取得しているためid属性で追加になる

    //各項目の追加
    //insertCell(0)ここの数字は表示される順番
    const id = row.insertCell(0);
    const comment = row.insertCell(1);
    const status = row.insertCell(2);
    const deletetask = row.insertCell(3);
  
    id.innerText = taskId;
    comment.innerText = taskadd.task;
    createStatusButton(status,taskadd.status);
    createDeleteButton(deletetask);
  });
}

//タスク追加イベント開始
add.addEventListener('click', () => {
const newtask = document.getElementById('newtask')
const todo = { task: newtask.value, status: '作業中' }
taskarray.push(todo);
  AddTasks();
  newtask.value = '';
});

//

// add.addEventListener('click', () => {
//   if (newtask.value === '') {
//     return
//   }

//   const list = document.getElementById('list')

//   //tbodyの中の要素の数を取得して連番を取得します
//   const id = list.children.length + 1

//   const comment = newtask.value

//   // 作業中
//   const workButton = document.createElement('button')

//   workButton.innerText = '作業中'

//   //削除
//   const deleteButton = document.createElement('button')

//   deleteButton.innerText = '削除'

//   // テーブルの行に必要なデータの配列を作成します
//   const columns = [id, comment, workButton, deleteButton]

//   //　テーブルの行を作成します
//   const tr = document.createElement('tr')

//   // 配列の中身を一つずつ取り出して処理をします
//   columns.forEach((column) => {
//     // テーブルの列を作成します
//     const td = document.createElement('td')

//     // HTMLElement　すべてのHTML要素のベースクラスです。色々な HTML要素 がこれを継承しています
//     // instanceof オブジェクトが自身のプロトタイプにコンストラクタの prototype プロパティを持っているかを確認します。戻り値はブール値です。
//     if (column instanceof HTMLElement) {
//       td.appendChild(column)
//     } else {
//       td.innerText = column
//     }

//     // 行に列を追加します
//     tr.appendChild(td)
//   })

//   // テーブルに行を追加します
//   list.appendChild(tr)

//   newtask.value = ''
// })