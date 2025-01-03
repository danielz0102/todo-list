import './project.css'
import { createTodoCard } from '@/components/todoCard/todoCard.js'
import { createFallback } from '@/components/fallback/fallback.js'
import { createIcon } from '@/components/icon/icon.js'
import { Main } from '@/components/main/main.js'
import { Todo } from '@/modules/Todo.js'
import { Storage } from '@/modules/Storage.js'
import addIconSrc from '@/assets/icons/add.svg'

export function createProjectPage(project) {
  const wrapper = document.createElement('div')
  wrapper.id = 'project'

  const title = document.createElement('h1')
  title.textContent = project.name

  const addTodoBtn = createAddTodoBtn(project)

  wrapper.append(title, addTodoBtn)

  if (!project.todos.length) {
    const fallback = createFallback('No todos yet')
    wrapper.appendChild(fallback)

    return wrapper
  }

  const todos = document.createElement('section')
  todos.id = 'todos'

  project.todos.forEach(todo => {
    const Card = createTodoCard(todo)
    todos.appendChild(Card)
  })

  wrapper.appendChild(todos)

  return wrapper
}

function createAddTodoBtn(project) {
  const addIcon = createIcon({ src: addIconSrc, alt: 'Plus icon' })

  const addTodoBtn = document.createElement('button')
  addTodoBtn.classList.add('icon-btn')
  addTodoBtn.appendChild(addIcon)
  addTodoBtn.addEventListener('click', () => {
    project.addTodo(new Todo({
      title: 'New todo!',
      description: '',
      dueDate: 'Today',
      priority: 'High'
    }))

    Storage.updateProject(project)
    Main.replaceChildren(createProjectPage(project))
  })

  return addTodoBtn
}