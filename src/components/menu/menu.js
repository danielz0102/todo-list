import './menu.css'
import { createFallback } from '@/components/fallback/fallback.js'

export function createMenu({
  title = null,
  items = [],
  fallback = 'No items to display',
  wrapperType = 'nav',
  id = null
}) {
  
  const Menu = document.createElement(wrapperType)
  Menu.classList.add('menu')
  
  if (id) Menu.id = id

  if (items.length === 0) {
    Menu.appendChild(createFallback(fallback))
  } else {
    Menu.append(...items)
  }

  if (title) {
    const section = document.createElement('section')
    section.classList.add('menu-section')
    section.append(createTitle(title), Menu)
    return section
  }

  return Menu
}

function createTitle(title) {
  const h3 = document.createElement('h3')
  h3.classList.add('title')
  h3.textContent = title

  return h3
}