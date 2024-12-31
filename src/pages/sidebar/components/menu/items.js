import todayIcon from '@/assets/icons/today.svg'
import allIcon from '@/assets/icons/all.svg'
import weekIcon from '@/assets/icons/week.svg'
import addIcon from '@/assets/icons/add.svg'

function createItem(text, iconSrc) {
  const item = document.createElement('button')
  item.classList.add('menu__item')

  const icon = new Image()
  icon.src = iconSrc
  icon.classList.add('icon')
  icon.alt = text + ' icon'

  item.append(icon, text)

  return item
}

export const items = {
  today: createItem('Today', todayIcon),
  week: createItem('This Week', weekIcon),
  all: createItem('All Projects', allIcon),
  add: createItem('Add Project', addIcon)
}