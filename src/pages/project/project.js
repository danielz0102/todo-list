import './project.css'
import addIconSrc from '@/assets/icons/add.svg'
import { createIcon } from '@/components/icon/icon.js'
import { createProjectTitle } from './components/projectTitle/projectTitle.js'
import { createDeleteProjectBtn } from './components/deleteProjectBtn/deleteProjectBtn.js'
import { createTodosList, updateTodosList } from './components/todosList/todosList.js'
import { Todo } from '@/modules/Todo.js'

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
  const todos = createTodosList(project)

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

    updateTodosList(project)
  })

  return addTodoBtn
}