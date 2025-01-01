import './project-card.css'
import { createFallback } from '@/components/fallback/fallback.js'
import { createItem } from '@/components/sidebar/components/items/items.js'
import addIconWhite from '@/assets/icons/add-white.svg'
import addIcon from '@/assets/icons/add.svg'

function createList(todos) {
  const list = document.createElement('ul')
  list.classList.add('project-card__list')

  todos.forEach(todo => {
    const item = document.createElement('li')
    item.classList.add('project-card__list__item')
    item.textContent = todo.title
    list.appendChild(item)
  })

  return list
}

export function createProjectCard(project) {
  const card = document.createElement('article')
  card.classList.add('project-card')

  const title = document.createElement('h3')
  title.textContent = project.name
  title.classList.add('menu__title')

  card.appendChild(title)
  
  if (project.todos.length > 0) {
    const list = createList(todos)
    card.appendChild(list)
  } else {
    const fallback = createFallback('No todos yet')
    card.appendChild(fallback)
  }

  const item = createItem({
    text: 'Create a new todo',
    iconSrc: addIcon,
  })

  card.appendChild(item)

  return card
}