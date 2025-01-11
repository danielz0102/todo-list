import './addTodoBtn.css'
import addIconSrc from '@/assets/icons/add.svg'
import { Todo } from '@/modules/Todo.js'
import { DATE_FORMAT } from '@/modules/consts.js'
import { createIcon } from '@/components/icon/icon.js'
import { updateTodosList } from '../todosList/todosList.js'
import { format } from 'date-fns'

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
    dueDate: format(new Date(), DATE_FORMAT),
    priority: 'priority'
  }))

  updateTodosList(project)
}