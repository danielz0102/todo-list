import './project.css'
import addIconSrc from '@/assets/icons/add.svg'
import { createTodoCard } from '@/components/todoCard/todoCard.js'
import { createFallback } from '@/components/fallback/fallback.js'
import { createIcon } from '@/components/icon/icon.js'
import { Todo } from '@/modules/Todo.js'

export function createProjectPage(project) {
  const wrapper = document.createElement('div')
  wrapper.id = 'project'

  const title = document.createElement('h1')
  title.textContent = project.name

  const addTodoBtn = createAddTodoBtn(project, wrapper)

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

function createAddTodoBtn(project, wrapper) {
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

    wrapper.replaceChildren(createProjectPage(project))
  })

  return addTodoBtn
}