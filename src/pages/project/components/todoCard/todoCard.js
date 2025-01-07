import './todo-card.css'
import { createCheckbox } from './components/checkbox/checkbox.js'
import { createDescription, createTitle } from './components/editableText/editableText.js'
import { createPriorityLabel } from './components/priorityLabel/priorityLabel.js'

function handleClick(e, todo) {
  const card = e.currentTarget
  expandCard(card, todo)
}

export function createTodoCard(todo, projectId) {
  const Card = document.createElement('article')
  Card.classList.add('todo-card')

  if (todo.complete) {
    Card.classList.add('todo-card--completed')
  }

  Card.id = todo.id
  Card.dataset.project = projectId

  const row = document.createElement('div')
  row.classList.add('row')

  const check = createCheckbox({
    todo,
    projectId,
    card: Card
  })
  const title = createTitle(todo, projectId)

  row.append(check, title)

  const dueDate = document.createElement('p')
  dueDate.textContent = todo.dueDate
  dueDate.classList.add('fallback')

  Card.addEventListener('click', e => {
    const isExpanded = Card.classList.contains('todo-card--expanded')

    if (!isExpanded && e.target !== check) {
      handleClick(e, todo)
    }

    if (isExpanded && e.target === e.currentTarget) {
      handleClick(e, todo)
    }
  })

  Card.append(
    row,
    dueDate,
  )

  return Card
}

function expandCard(card, todo) {
  card.classList.toggle('todo-card--expanded')

  const row = card.querySelector('.row')
  const isExpanded = card.classList.contains('todo-card--expanded')
  const projectId = card.dataset.project
  const title = row.querySelector('.title')

  if (isExpanded) {
    const priorityLabel = createPriorityLabel(todo.priority)
    const todoInfo = createTodoInfo(todo, projectId)
    
    title.setAttribute('contenteditable', true)
    row.appendChild(priorityLabel)
    row.after(todoInfo)
  } else {
    title.removeAttribute('contenteditable')
    card.querySelector('.todo-info').remove()
    row.querySelector('.priority').remove()
  }
}

function createTodoInfo(todo, projectId) {
  const info = document.createElement('div')
  info.classList.add('todo-info')

  const description = createDescription(todo, projectId)

  info.appendChild(description)

  return info
}