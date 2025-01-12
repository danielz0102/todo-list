import './confirmationModal.css'
import { Storage } from '@/modules/Storage.js'

export function createConfirmationModal(projectId) {
  const modal = document.createElement('dialog')
  modal.id = 'confirmationDeleteProjectModal'

  const title = document.createElement('h3')
  title.classList.add('.title')
  title.textContent = 'Are you sure you want to delete this project?'

  const text = document.createElement('p')
  text.textContent = 'All your todos in this project will be deleted'

  const acceptBtn = document.createElement('button')
  acceptBtn.id = 'acceptBtn'
  acceptBtn.classList.add('btn')
  acceptBtn.textContent = 'Ok'
  acceptBtn.addEventListener('click', () => {
    deleteProject(projectId)
    modal.close()
  })

  const cancelBtn = document.createElement('button')
  cancelBtn.id = 'cancelBtn'
  cancelBtn.classList.add('btn')
  cancelBtn.textContent = 'Cancel'
  cancelBtn.addEventListener('click', () => modal.close())

  modal.addEventListener('close', () => {
    //Wait for the closing CSS transition
    setTimeout(() => {
      modal.remove()
    }, 1000)
  })

  modal.append(
    title,
    text,
    cancelBtn,
    acceptBtn
  )

  return modal
}

function deleteProject(projectId) {
  const options = { id: projectId }
  const projectDeletedEvent = new CustomEvent('projectDeleted', { detail: options })

  Storage.removeProject(projectId)
  document.dispatchEvent(projectDeletedEvent)
}