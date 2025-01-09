import './deleteProjectBtn.css'
import { Storage } from '@/modules/Storage.js'

export function createDeleteProjectBtn(projectId) {
  const btn = document.createElement('button')
  btn.textContent = 'Delete project'
  btn.id = 'deleteProjectBtn'

  btn.addEventListener('click', () => handleClick(projectId))

  return btn
}

function handleClick(projectId) {
  const options = { id: projectId }
  const projectDeletedEvent = new CustomEvent('projectDeleted', { detail: options })

  Storage.removeProject(projectId)
  document.dispatchEvent(projectDeletedEvent)
}