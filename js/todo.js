const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

//1.ローカルストレージからデータを読み込む（なければから配列）
let todos = JSON.parse(localStorage.getItem('todos')) || [];

/**
 * 画面にToDoを表示する関数
 */
function renderTodos() {
  //リストを一度空にする
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.innerHTML = `
      <span>${todo}</span>
      <button onclick="deleteTodo(${index})">
        <i class="fa-solid fa-trash"></i>
      </button>
    `;
    todoList.appendChild(li);
  });
}

/**
 * ToDoを追加する処理
 */
todoForm.addEventListener('submit', (e) => {
  e.preventDefault(); //ページのリロードを防ぐ
  const newTodo = todoInput.value.trim();
  if(newTodo !== ''){
    todos.push(newTodo);  //配列に追加
    saveAndRender();      //保存と表示更新
    todoInput.value = ''; //入力欄を空にする
  }
})

/**
 * ToDoを削除する処理
 */
function deleteTodo(index) {
  todos.splice(index, 1); //指定した要素を配列から削除
  saveAndRender();
}

/**
 * データを保存して再描画する共通処理
 */
function saveAndRender() {
  localStorage.setItem('todos', JSON.stringify(todos)); //ストレージに保存
  renderTodos();  //画面を更新
}

//2.初回読み込み時に表示
renderTodos();