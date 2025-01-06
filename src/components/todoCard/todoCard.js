import './todo-card.css'
import { Priority } from '@/modules/Todo.js'
import { Storage } from '@/modules/Storage.js'

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

function createDescription(todo, projectId) {
  const description = document.createElement('p')
  description.classList.add('description')
  description.textContent = todo.description || 'Add a description...'
  description.setAttribute('contenteditable', true)

  description.addEventListener('blur', e => {
    const project = Storage.getProject(projectId)

    todo.updateProperty({
      value: e.currentTarget.textContent,
      property: 'description',
      project
    })
  })

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

function createTitle(todo, projectId) {
  const title = document.createElement('p')
  title.textContent = todo.title
  title.classList.add('title')

  title.addEventListener('blur', e => {
    const project = Storage.getProject(projectId)

    todo.updateProperty({
      value: e.currentTarget.textContent,
      property: 'title',
      project
    })
  })

  return title
}

function createCheckbox({todo, projectId, card}) {
  const check = document.createElement('input')
  check.type = 'checkbox'
  check.checked = todo.complete

  check.addEventListener('input', e => {
    const project = Storage.getProject(projectId)
    const isChecked = e.currentTarget.checked

    todo.updateProperty({
      value: isChecked,
      property: 'complete',
      project
    })

    card.classList.toggle('todo-card--completed')
  })

  return check
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