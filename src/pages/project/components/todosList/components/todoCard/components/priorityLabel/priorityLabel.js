import './priorityLabel.css'
import { PRIORITIES } from '@/modules/Todo.js'
import { createPriorityMenu } from '../../../priorityMenu/priorityMenu.js'
import { Storage } from '@/modules/Storage.js'

const PRIORITY_STYLES = {
  [PRIORITIES.LOW]: 'priority--low',
  [PRIORITIES.MEDIUM]: 'priority--medium',
  [PRIORITIES.HIGH]: 'priority--high',
}

export function createPriorityLabel({ 
  priority = 'priority',
  editable = false,
  todo,
  projectId
}) {
  const label = document.createElement(editable ? 'button' : 'div')

  if (editable) {
    if (!document.querySelector('#priorityMenu')) {
      const priorityMenu = createPriorityMenu()
      document.querySelector('#app').appendChild(priorityMenu)
    }

    label.setAttribute('popovertarget', 'priorityMenu')
  }

  label.classList.add('priority')
  label.textContent = priority

  setStyle(label, priority)

  label.addEventListener('priorityUpdated', event => updatePriority(event, todo, projectId))

  return label
}

function updatePriority(event, todo, projectId) {
  const label = event.target
  const priority = event.detail.priority

  label.textContent = priority
  setStyle(label, priority)

  todo.updateProperty({
    value: priority,
    property: 'priority',
    project: Storage.getProject(projectId)
  })
}

function setStyle(label, priority) {
  const styleSelected = PRIORITY_STYLES[priority]

  if (styleSelected) {
    Object.values(PRIORITY_STYLES).forEach(style => {
      label.classList.remove(style)
    })

    label.classList.add(styleSelected)
  }
}