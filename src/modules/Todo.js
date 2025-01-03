const Priority = Object.freeze({
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high'
})

class Todo {
  constructor({ title, description, dueDate, priority }) {
    this.id = crypto.randomUUID()
    this.title = title
    this.description = description
    this.dueDate = dueDate
    this.priority = priority
    this.complete = false
  }
}

export { Priority, Todo }