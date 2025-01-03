export class Project {
  constructor(name) {
    this.id = crypto.randomUUID()
    this.name = name
    this.todos = []
  }

  addTodo(todo) {
    this.todos.push(todo)
  }

  removeTodo(todo) {
    this.todos = this.todos.filter(t => t !== todo)
  }
}