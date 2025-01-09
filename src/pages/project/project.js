import './project.css'
import { createProjectTitle } from './components/projectTitle/projectTitle.js'
import { createDeleteProjectBtn } from './components/deleteProjectBtn/deleteProjectBtn.js'
import { createTodosList } from './components/todosList/todosList.js'
import { createAddTodoBtn } from './components/addTodoBtn/addTodoBtn.js'

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