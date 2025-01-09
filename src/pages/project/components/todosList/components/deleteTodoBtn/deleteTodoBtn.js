import deleteIconSrc from '@/assets/icons/delete.svg'
import { createIcon } from '@/components/icon/icon.js'
import { updateTodosList } from '@/pages/project/components/todosList/todosList.js'

export function createDeleteTodoBtn(todoId, project) {
  const deleteIcon = createIcon({ src: deleteIconSrc, alt: 'Trash can icon' })

  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('icon-btn')
  deleteBtn.appendChild(deleteIcon)
  deleteBtn.addEventListener('click', () => handleClick(todoId, project))

  return deleteBtn
}

function handleClick(todoId, project) {
  project.removeTodo(todoId)
  updateTodosList(project)
}