import { element } from "./view/html-util.js";

export class App {
  mount(){
    // `id="js-form"`の要素を取得
    const formElement = document.querySelector('#js-form');
    // `id="js-form-input"`の要素を取得
    const inputElement = document.querySelector('#js-form-input');
    // `id="js-todo-list"`の要素を取得
    const containerElement = document.querySelector('#js-todo-list');
    // `id="js-todo-count"`の要素を取得
    const todoItemCountElement = document.querySelector('#js-todo-count');
    // todoアイテム数
    let todoItemCount = 0;

    // form要素から発生したsubmitイベントを受け取る
    formElement.addEventListener("submit", (event) =>{
      // イベントが発生したときに呼ばれるコールバック関数
      // submitイベントの本来の動作を止める
      event.preventDefault();
      // 追加するTodoアイテムの要素（li要素）を作成する
      const todoItemElement = element `<li>${inputElement.value}</li>`
      // Todoアイテムをcontainerに追加する
      containerElement.appendChild(todoItemElement);
      // Todoアイテムを+1し、表示されてるテキストを更新する
      todoItemCount += 1;
      todoItemCountElement.textContent = `Todoアイテム数: ${todoItemCount}`;
      // 入力欄を空文字にしてリセットする
      inputElement.value = "";

    });
  }
}