import './todo-card.css'

export function createTodoCard(todo) {
  const Card = document.createElement('article')
  Card.classList.add('todo-card')

  const check = document.createElement('input')
  check.type = 'checkbox'
  check.checked = todo.complete

  const title = document.createElement('p')
  title.textContent = todo.title
  title.classList.add('title')

  const dueDate = document.createElement('p')
  dueDate.textContent = todo.dueDate
  dueDate.classList.add('fallback')

  Card.append(
    check,
    title,
    dueDate,
  )

  return Card
}