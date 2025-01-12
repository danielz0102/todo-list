import './deleteProjectBtn.css'
import { createConfirmationModal } from './confirmationModal/confirmationModal.js'

export function createDeleteProjectBtn(projectId) {
  const btn = document.createElement('button')
  btn.textContent = 'Delete project'
  btn.id = 'deleteProjectBtn'

  btn.addEventListener('click', () => handleClick(projectId))

  return btn
}

function handleClick(projectId) {
  const modal = createConfirmationModal(projectId)
  document.querySelector('#app').appendChild(modal)
  modal.showModal()
}