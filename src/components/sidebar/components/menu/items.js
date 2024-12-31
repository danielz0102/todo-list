import { renderFunctions } from '@/components/main/main.js'
import todayIcon from '@/assets/icons/today.svg'
import allIcon from '@/assets/icons/all.svg'
import weekIcon from '@/assets/icons/week.svg'
import addIcon from '@/assets/icons/add.svg'

function createItem(text, iconSrc) {
  const item = document.createElement('button')
  item.classList.add('menu__item')
  item.dataset.page = (text.charAt(0).toLowerCase() + text.slice(1)).replace(' ', '')

  const icon = new Image()
  icon.src = iconSrc
  icon.classList.add('icon')
  icon.alt = text + ' icon'
  
  item.append(icon, text)

  item.addEventListener('click', () => renderFunctions[item.dataset.page]())

  return item
}

export const items = [
  createItem('Today', todayIcon),
  createItem('This Week', weekIcon),
  createItem('All Projects', allIcon),
  createItem('Add Project', addIcon)
]