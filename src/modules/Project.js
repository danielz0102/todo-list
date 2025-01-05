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

  removeTodo(id) {
    this.todos = this.todos.filter(todo => todo.id !== id)
    Storage.updateProject(this)
  }

  updateTodo(newTodo) {
    const index = this.todos.findIndex(todo => todo.id === newTodo.id)

    if (index === -1) {
      throw new Error(`Todo with id ${newTodo.id} not found`)
    }
    
    this.todos[index] = newTodo
    Storage.updateProject(this)
  }
}