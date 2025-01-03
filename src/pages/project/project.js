import './project.css'
import { createTodoCard } from '@/components/todoCard/todoCard.js'
import { createFallback } from '@/components/fallback/fallback.js'
import { Todo } from '@/modules/Todo.js'

export function createProjectPage(project) {
  const Project = document.createElement('div')
  Project.id = 'project'

  const title = document.createElement('h1')
  title.textContent = project.name

  Project.append(title)

  //dummy
  project.addTodo(new Todo({
    title: 'Create a new todo',
    description: 'Click the button below to create a new todo',
    dueDate: 'Today',
    priority: 'High'
  }))

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