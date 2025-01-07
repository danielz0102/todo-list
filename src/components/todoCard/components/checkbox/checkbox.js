import './checkbox.css'
import { Storage } from '@/modules/Storage.js'

export function createCheckbox({todo, projectId, card}) {
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