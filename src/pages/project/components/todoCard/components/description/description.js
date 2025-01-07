import './description.css'
import { Storage } from '@/modules/Storage.js'

const DEFAULT_DESCRIPTION = 'Add a description...'

export function createDescription(todo, projectId) {
  const description = document.createElement('span')
  description.classList.add('description')
  description.textContent = todo.description || DEFAULT_DESCRIPTION
  description.setAttribute('contenteditable', true)

  description.addEventListener('keydown', handleKeyboard)
  description.addEventListener('blur',
    event => handleEdition({ event, todo, projectId })
  )

  return description
}

function handleKeyboard(event) {
  if (event.key === 'Enter' && !event.shiftKey || event.key === 'Escape') {
    event.preventDefault()
    event.currentTarget.blur()
  }
}

function handleEdition({ event, todo, projectId }) {
  const project = Storage.getProject(projectId)
  event.currentTarget.textContent ||= DEFAULT_DESCRIPTION

  todo.updateProperty({
    value: event.currentTarget.textContent,
    property: 'description',
    project
  }) 
}