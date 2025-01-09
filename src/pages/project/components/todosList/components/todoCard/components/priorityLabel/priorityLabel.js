import './priorityLabel.css'
import { Priority } from '@/modules/Todo.js'

const PRIORITY_STYLES = {
  [Priority.LOW]: 'priority--low',
  [Priority.MEDIUM]: 'priority--medium',
  [Priority.HIGH]: 'priority--high',
}

export function createPriorityLabel(priority) {
  const label = document.createElement('div')
  label.classList.add('priority')
  label.textContent = priority

  const priorityFormatted = priority.toLowerCase()
  const style = PRIORITY_STYLES[priorityFormatted]

  label.classList.add(style)

  return label
}