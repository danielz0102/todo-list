import './project.css'
import addIconSrc from '@/assets/icons/add.svg'
import deleteIconSrc from '@/assets/icons/delete.svg'
import { createTodoCard } from '@/components/todoCard/todoCard.js'
import { createFallback } from '@/components/fallback/fallback.js'
import { createIcon } from '@/components/icon/icon.js'
import { Todo } from '@/modules/Todo.js'
import { Storage } from '@/modules/Storage.js'

export function createProjectPage(project) {
  const wrapper = document.createElement('div')
  wrapper.id = 'project'

  const title = document.createElement('h1')

  if (!project) {
    title.textContent = 'No project found'
    wrapper.appendChild(title)

    return wrapper
  }

  title.textContent = project.name

  const addTodoBtn = createAddTodoBtn(project, wrapper)
  const deleteProjectBtn = createDeleteProjectBtn(project.id)

  wrapper.append(title, addTodoBtn, deleteProjectBtn)

  if (!project.todos.length) {
    const fallback = createFallback('No todos yet')
    wrapper.appendChild(fallback)

    return wrapper
  }

  const todos = document.createElement('section')
  todos.id = 'todos'

  project.todos.forEach(todo => {
    const row = document.createElement('div')
    row.classList.add('row')
    
    const deleteBtn = createDeleteTodoBtn(todo.id, project, wrapper)
    const Card = createTodoCard(todo)

    row.append(Card, deleteBtn)
    todos.appendChild(row)
  })

  wrapper.appendChild(todos)

  return wrapper
}

function createAddTodoBtn(project, wrapper) {
  const addIcon = createIcon({ src: addIconSrc, alt: 'Plus icon' })

  const addTodoBtn = document.createElement('button')
  addTodoBtn.classList.add('icon-btn', 'icon-btn--floating')
  addTodoBtn.appendChild(addIcon)

  addTodoBtn.addEventListener('click', () => {
    project.addTodo(new Todo({
      title: 'New todo!',
      description: '',
      dueDate: 'Today',
      priority: 'High'
    }))

    wrapper.replaceChildren(createProjectPage(project))
  })

  return addTodoBtn
}

function createDeleteTodoBtn(todoId, project, wrapper) {
  const deleteIcon = createIcon({ src: deleteIconSrc, alt: 'Trash can icon' })
  
  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('icon-btn')
  deleteBtn.appendChild(deleteIcon)

  deleteBtn.addEventListener('click', () => {
    project.removeTodo(todoId)

    const newPage = createProjectPage(project)
    wrapper.replaceChildren(newPage)
  })

  return deleteBtn
}

function createDeleteProjectBtn(projectId) {
  const btn = document.createElement('button')
  btn.textContent = 'Delete project'
  btn.id = 'deleteProjectBtn'

  btn.addEventListener('click', () => {
    console.log('Deleting project...')
    Storage.removeProject(projectId)
    document.dispatchEvent(new CustomEvent('projectDeleted'), {
      detail: {
        id: projectId
      }
    })
  })

  return btn
}