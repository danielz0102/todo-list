import { handleKeyboard } from '@/pages/project/modules/handleKeyboard.js'
import { Storage } from '@/modules/Storage.js'

const DEFAULT_TITLE = 'My Project'

export function createProjectTitle(project) {
  const title = document.createElement('h1')

  if (!project) {
    title.textContent = 'No project found'
    return title
  }

  title.textContent = project.name
  title.setAttribute('contenteditable', true)

  title.addEventListener('keydown', event => handleKeyboard(event, false))
  title.addEventListener('blur', event => handleEdition(event, project))

  return title
}

function handleEdition(event, project) {
  event.currentTarget.textContent ||= DEFAULT_TITLE
  project.name = event.currentTarget.textContent

  Storage.updateProject(project)
  document.dispatchEvent(new CustomEvent('projectTitleUpdated'))
}