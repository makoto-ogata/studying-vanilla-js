let todoId = 0;

export class TodoItemModel {
  /**
     * @param {string} title Todoアイテムのタイトル
     * @param {boolean} completed Todoアイテムが完了済みならばtrue、そうでない場合はfalse
     */
  constructor({title, completed}) {
    // idは自動的に連番となりそれぞれのインスタンスごとに異なるものとする
    this.id = todoId++;
    this.title = title;
    this.completed = completed;
  }
}