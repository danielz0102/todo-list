import './project.css'
import { createTodoCard } from '@/components/todoCard/todoCard.js'
import { createFallback } from '@/components/fallback/fallback.js'
import { createIcon } from '@/components/icon/icon.js'
import { Todo } from '@/modules/Todo.js'
import addIconSrc from '@/assets/icons/add.svg'
import { Main } from '@/components/main/main.js'

export function createProjectPage(project) {
  const Project = document.createElement('div')
  Project.id = 'project'

  const title = document.createElement('h1')
  title.textContent = project.name

  const addIcon = createIcon({ src: addIconSrc, alt: 'Plus icon' })

  const addTodoBtn = document.createElement('button')
  addTodoBtn.classList.add('icon-btn')
  addTodoBtn.appendChild(addIcon)
  addTodoBtn.addEventListener('click', () => {
    addTodo(project)
    Main.replaceChildren(createProjectPage(project))
  })

  Project.append(title, addTodoBtn)

  if (!project.todos.length) {
    const fallback = createFallback('No todos yet')
    Project.appendChild(fallback)

    return Project
  }

  const todos = document.createElement('section')
  todos.id = 'todos'

  project.todos.forEach(todo => {
    const Card = createTodoCard(todo)
    todos.appendChild(Card)
  })

  Project.appendChild(todos)

  return Project
}

function addTodo(project) {
  project.addTodo(new Todo({
    title: 'New todo!',
    description: '',
    dueDate: 'Today',
    priority: 'High'
  }))

  console.log(project.todos)
}