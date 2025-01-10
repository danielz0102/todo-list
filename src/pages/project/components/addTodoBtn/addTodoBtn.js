import './addTodoBtn.css'
import addIconSrc from '@/assets/icons/add.svg'
import { createIcon } from '@/components/icon/icon.js'
import { Todo } from '@/modules/Todo.js'
import { updateTodosList } from '../todosList/todosList.js'

export function createAddTodoBtn(project) {
  const addIcon = createIcon({ src: addIconSrc, alt: 'Plus icon' })

  const addTodoBtn = document.createElement('button')
  addTodoBtn.id = 'addTodoBtn'
  addTodoBtn.classList.add('icon-btn', 'icon-btn--rounded')
  addTodoBtn.appendChild(addIcon)

  addTodoBtn.addEventListener('click', () => handleClick(project))

  return addTodoBtn
}

function handleClick(project) {
  project.addTodo(new Todo({
    title: 'New todo!',
    description: '',
    dueDate: 'Today',
    priority: 'priority'
  }))

  updateTodosList(project)
}