import './description.css'
import { Storage } from '@/modules/Storage.js'
import { handleKeyboard } from '@/pages/project/modules/handleKeyboard.js'

const DEFAULT_DESCRIPTION = 'Add a description...'
const DEFAULT_TITLE = 'Todo'

export function createDescription(todo, projectId) {
  const description = document.createElement('span')
  description.textContent = todo.description || DEFAULT_DESCRIPTION
  description.classList.add('description')
  description.setAttribute('contenteditable', true)

  description.addEventListener('keydown', event => handleKeyboard(event, true))
  description.addEventListener('blur',
    event => handleEdition({
      event,
      todo,
      projectId,
      property: 'description',
      defaultText: DEFAULT_DESCRIPTION,
    })
  )

  return description
}

export function createTitle(todo, projectId) {
  const title = document.createElement('p')
  title.textContent = todo.title || DEFAULT_TITLE
  title.classList.add('title')

  title.addEventListener('keydown', event => handleKeyboard(event, false))
  title.addEventListener('blur',
    event => handleEdition({
      event,
      todo,
      projectId,
      property: 'title',
      defaultText: DEFAULT_TITLE
    })
  )

  return title
}

function handleEdition({
  event,
  todo,
  projectId,
  property,
  defaultText = '...'
}) {
  const project = Storage.getProject(projectId)
  event.currentTarget.textContent ||= defaultText

  todo.updateProperty({
    value: event.currentTarget.textContent,
    property,
    project
  }) 
}