import './todo-card.css'
import { Priority } from '@/modules/Todo.js'

const PRIORITY_STYLES = {
  [Priority.LOW]: 'priority--low',
  [Priority.MEDIUM]: 'priority--medium',
  [Priority.HIGH]: 'priority--high',
}

function handleClick(e, todo) {
  const card = e.currentTarget
  expandCard(card, todo)
}

function expandCard(card, todo) {
  card.classList.toggle('todo-card--expanded')
  const row = card.querySelector('.row')

  if (card.classList.contains('todo-card--expanded')) {
    const priorityLabel = createPriorityLabel(todo.priority)
    const todoInfo = createTodoInfo(todo)
    
    row.appendChild(priorityLabel)
    row.after(todoInfo)
  } else {
    card.querySelector('.todo-info').remove()
    row.querySelector('.priority').remove()
  }
}

function createTodoInfo(todo) {
  const info = document.createElement('div')
  info.classList.add('todo-info')

  const description = createDescription(todo.description)

  info.appendChild(description)

  return info
}

function createDescription(text) {
  const description = document.createElement('p')
  description.classList.add('description')
  description.textContent = text || 'Add a description...'

  return description
}

function createPriorityLabel(priority) {
  const label = document.createElement('div')
  label.classList.add('priority')
  label.textContent = priority

  const priorityFormatted = priority.toLowerCase()
  const style = PRIORITY_STYLES[priorityFormatted]

  label.classList.add(style)

  return label
}

export function createTodoCard(todo) {
  const Card = document.createElement('article')
  Card.classList.add('todo-card')

  const row = document.createElement('div')
  row.classList.add('row')

  const check = document.createElement('input')
  check.type = 'checkbox'
  check.checked = todo.complete

  const title = document.createElement('p')
  title.textContent = todo.title
  title.classList.add('title')

  row.append(check, title)

  const dueDate = document.createElement('p')
  dueDate.textContent = todo.dueDate
  dueDate.classList.add('fallback')

  Card.addEventListener('click', e => {
    if (e.target !== check) {
      handleClick(e, todo)
    }
  })

  Card.append(
    row,
    dueDate,
  )

  return Card
}