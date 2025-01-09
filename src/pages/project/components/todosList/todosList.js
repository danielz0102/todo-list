import './todosList.css'
import { createTodoCard } from './components/todoCard/todoCard.js'
import { createFallback } from '@/components/fallback/fallback.js'
import { createDeleteTodoBtn } from './components/deleteTodoBtn/deleteTodoBtn.js'

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

function updateTodosList(project) {
  const newContent = createTodosList(project).children
  document.querySelector('#todos').replaceChildren(...newContent)
}

export { createTodosList, updateTodosList }