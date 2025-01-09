import './project.css'
import addIconSrc from '@/assets/icons/add.svg'
import deleteIconSrc from '@/assets/icons/delete.svg'
import { createTodoCard } from './components/todoCard/todoCard.js'
import { createFallback } from '@/components/fallback/fallback.js'
import { createIcon } from '@/components/icon/icon.js'
import { createProjectTitle } from './components/projectTitle/projectTitle.js'
import { Todo } from '@/modules/Todo.js'
import { Storage } from '@/modules/Storage.js'

export function createProjectPage(project) {
  const wrapper = document.createElement('div')
  wrapper.id = 'project'

  const title = createProjectTitle(project)

  if (!project) {
    wrapper.appendChild(title)
    return wrapper
  }

  const addTodoBtn = createAddTodoBtn(project)
  const deleteProjectBtn = createDeleteProjectBtn(project.id)
  const todos = createTodos(project)

  wrapper.append(
    title,
    addTodoBtn,
    deleteProjectBtn,
    todos
  )

  return wrapper
}

function createAddTodoBtn(project) {
  const addIcon = createIcon({ src: addIconSrc, alt: 'Plus icon' })

  const addTodoBtn = document.createElement('button')
  addTodoBtn.id = 'addTodoBtn'
  addTodoBtn.classList.add('icon-btn', 'icon-btn--rounded')
  addTodoBtn.appendChild(addIcon)

  addTodoBtn.addEventListener('click', () => {
    project.addTodo(new Todo({
      title: 'New todo!',
      description: '',
      dueDate: 'Today',
      priority: 'None'
    }))

    updateTodos(project)
  })

  return addTodoBtn
}

function createDeleteTodoBtn(todoId, project) {
  const deleteIcon = createIcon({ src: deleteIconSrc, alt: 'Trash can icon' })

  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('icon-btn')
  deleteBtn.appendChild(deleteIcon)

  deleteBtn.addEventListener('click', () => {
    project.removeTodo(todoId)
    updateTodos(project)
  })

  return deleteBtn
}

function createDeleteProjectBtn(projectId) {
  const btn = document.createElement('button')
  btn.textContent = 'Delete project'
  btn.id = 'deleteProjectBtn'

  btn.addEventListener('click', () => {
    Storage.removeProject(projectId)
    document.dispatchEvent(new CustomEvent('projectDeleted'), {
      detail: {
        id: projectId
      }
    })
  })

  return btn
}

function createTodos(project) {
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

function updateTodos(project) {
  const newContent = createTodos(project).children
  document.querySelector('#todos').replaceChildren(...newContent)
}