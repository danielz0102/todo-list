import './todosList.css'
import deleteIconSrc from '@/assets/icons/delete.svg'
import { createTodoCard } from './components/todoCard/todoCard.js'
import { createFallback } from '@/components/fallback/fallback.js'
import { createIcon } from '@/components/icon/icon.js'

function createTodosList(project) {
  const todos = document.createElement('section')
  todos.id = 'todos'

  if (!project.todos.length) {
    const fallback = createFallback('No todos yet')
    todos.appendChild(fallback)

    return todos
  }

  project.todos.forEach(todo => {
    const row = document.createElement('div')
    row.classList.add('row')

    const deleteBtn = createDeleteTodoBtn(todo.id, project)
    const Card = createTodoCard(todo, project.id)

    row.append(Card, deleteBtn)
    todos.appendChild(row)
  })

  return todos
}

function createDeleteTodoBtn(todoId, project) {
  const deleteIcon = createIcon({ src: deleteIconSrc, alt: 'Trash can icon' })

  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('icon-btn')
  deleteBtn.appendChild(deleteIcon)

  deleteBtn.addEventListener('click', () => {
    project.removeTodo(todoId)
    updateTodosList(project)
  })

  return deleteBtn
}

function updateTodosList(project) {
  const newContent = createTodosList(project).children
  document.querySelector('#todos').replaceChildren(...newContent)
}

export { createTodosList, updateTodosList }