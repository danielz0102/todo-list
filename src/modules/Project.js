import { Storage } from './Storage.js'

export class Project {
  constructor(name) {
    this.id = crypto.randomUUID()
    this.name = name
    this.todos = []
  }

  addTodo(todo) {
    this.todos.push(todo)
    Storage.updateProject(this)
  }

  removeTodo(todo) {
    this.todos = this.todos.filter(t => t !== todo)
    Storage.updateProject(this)
  }
}