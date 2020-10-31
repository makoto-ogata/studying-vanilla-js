import { element, render } from "./view/html-util.js";
import { TodoItemModel } from "./model/TodoItemModel.js";
import { TodoListModel } from "./model/TodoListModel.js";


export class App {
  constructor(){
    // TodoListの初期化
    this.todoListModel = new TodoListModel();
  }
  mount(){
    // `id="js-form"`の要素を取得
    const formElement = document.querySelector('#js-form');
    // `id="js-form-input"`の要素を取得
    const inputElement = document.querySelector('#js-form-input');
    // `id="js-todo-list"`の要素を取得
    const containerElement = document.querySelector('#js-todo-list');
    // `id="js-todo-count"`の要素を取得
    const todoItemCountElement = document.querySelector('#js-todo-count');

    this.todoListModel.onChange(()=> {
      // TodoリストをまとめるList要素
      const todoListElement = element`<ul />`;
      // それぞれのTodoItem要素をtodoListElement以下へ追加する
      const todoItems = this.todoListModel.getTodoItems();
      todoItems.forEach(item => {
        const todoItemElement = item.completed
          ? element`<li><input type="checkbox" class="checkbox" checked>
              <s>${item.title}</s>
              <button class="delete">☓</button>
            </li>`
          : element`<li><input type="checkbox" class="checkbox">
              ${item.title}
              <button class="delete">☓</button>
            </li>`;
        const inputCheckboxElement = todoItemElement.querySelector(".checkbox");
        inputCheckboxElement.addEventListener("change", ()=> {
          this.todoListModel.updateTodo({
            id: item.id,
            completed: !item.completed
          });
        });
        //削除ボタン（☓）がクリックされたときにTodoListModelからアイテムを削除する
        const deleteButtonElement = todoItemElement.querySelector(".delete");
        deleteButtonElement.addEventListener("click", ()=> {
          this.todoListModel.deleteTodo({
            id: item.id
          });
        });
        todoListElement.appendChild(todoItemElement);
      });
      // containerElementの中身をtodoElementで上書きする
      render(todoListElement, containerElement);
      // アイテム数の表示を更新
      todoItemCountElement.textContent = `Todoアイテム数: ${this.todoListModel.getTotalCount()}`;
    });

    // フォームを送信したら、新しいTodoItemModelを追加する
    formElement.addEventListener("submit", (event) =>{
      // submitイベントの本来の動作を止める
      event.preventDefault();
      // 新しいTodoItemをTodoListへ追加する
      this.todoListModel.addTodo(new TodoItemModel({
        title: inputElement.value,
        completed: false
      }));
      // 入力欄を空文字にしてリセットする
      inputElement.value = "";

    });
  }
}