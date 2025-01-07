import './todo-card.css'
import { createCheckbox } from './components/checkbox/checkbox.js'
import { createDescription, createTitle } from './components/editableText/editableText.js'
import { createPriorityLabel } from './components/priorityLabel/priorityLabel.js'

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

  const checkbox = createCheckbox({
    todo,
    projectId,
    card: Card
  })
  const title = createTitle(todo, projectId)
  const priorityLabel = createPriorityLabel('High')

  row.append(checkbox, title, priorityLabel)

  const dueDate = document.createElement('p')
  dueDate.textContent = todo.dueDate
  dueDate.classList.add('fallback')

  const description = createDescription(todo, projectId)

  Card.append(
    row,
    description,
    dueDate,
  )

  Card.addEventListener('click', event => handleClick(event, checkbox))

  return Card
}

function handleClick(event, checkbox) {
  const Card = event.currentTarget

  let isExpanded = Card.classList.contains('todo-card--expanded')
  const shouldExpand = !isExpanded && event.target !== checkbox
  const shouldCollapse = isExpanded && event.target === Card

  if (shouldExpand || shouldCollapse) {
    Card.classList.toggle('todo-card--expanded')
    isExpanded = Card.classList.contains('todo-card--expanded')
    handleExpansion(Card, isExpanded)
  }
}

function handleExpansion(Card, isExpanded) {
  const title = Card.querySelector('.title')
  const label = Card.querySelector('.priority')
  const description = Card.querySelector('.description')

  label.style.display = isExpanded ? 'inline' : 'none'
  description.style.display = isExpanded ? 'block' : 'none'
  
  if (isExpanded) {
    title.setAttribute('contenteditable', true)
  } else {
    title.removeAttribute('contenteditable')
  }
}