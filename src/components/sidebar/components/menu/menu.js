import './menu.css'

export function createMenu({ 
  title = null,
  items = [],
  fallback = null
}) {
  const Menu = document.createElement('nav')
  Menu.classList.add('menu')

  if (title) {
    const h3 = document.createElement('h3')
    h3.classList.add('menu__title')
    h3.textContent = title
    Menu.appendChild(h3)
  }

  if (fallback) {
    const p = document.createElement('p')
    p.classList.add('menu__fallback')
    p.textContent = fallback
    Menu.appendChild(p)
  }

  if (items.length > 0) {
    Menu.append(...items)
  }

  return Menu
}