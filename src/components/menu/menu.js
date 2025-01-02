import './menu.css'
import { createFallback } from '@/components/fallback/fallback.js'

export function createMenu({
  title = null,
  items = [],
  fallback = null,
  wrapperType = 'nav'
}) {
  const Menu = document.createElement(wrapperType)
  Menu.classList.add('menu')

  if (title) {
    Menu.appendChild(createTitle(title))
  }

  if (fallback && items.length === 0) {
    Menu.appendChild(createFallback(fallback))
  }

  if (items.length > 0) {
    Menu.append(...items)
  }

  return Menu
}

function createTitle(title) {
  const h3 = document.createElement('h3')
  h3.classList.add('menu__title')
  h3.textContent = title

  return h3
}