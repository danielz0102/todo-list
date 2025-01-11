import './todo-card.css'
import { createCheckbox } from './components/checkbox/checkbox.js'
import { createDescription, createTitle } from './components/editableText/editableText.js'
import { createPriorityLabel } from './components/priorityLabel/priorityLabel.js'
import { createDueDate } from './components/dueDate/dueDate.js'

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
  const priorityLabel = createPriorityLabel({
    priority: todo.priority,
    editable: true,
    todo,
    projectId
  })
  priorityLabel.classList.add('hidden')

  row.append(checkbox, title, priorityLabel)

  const dueDate = createDueDate(todo, projectId, true)
  const description = createDescription(todo, projectId)
  description.classList.add('hidden')

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
  const isExpanded = Card.classList.contains('todo-card--expanded')
  const shouldExpand = !isExpanded && event.target !== checkbox
  const shouldCollapse = isExpanded && event.target === Card

  if (shouldExpand || shouldCollapse) {
    setCardStyles(Card, shouldExpand)
  }
}

function setCardStyles(Card, isExpanded) {
  const title = Card.querySelector('.title')
  const label = Card.querySelector('.priority')
  const description = Card.querySelector('.description')
  const date = Card.querySelector('.dueDate')

  Card.classList.toggle('todo-card--expanded')
  label.classList.toggle('hidden')
  description.classList.toggle('hidden')
  title.toggleAttribute('contenteditable')
  date.editable = isExpanded
}