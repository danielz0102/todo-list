import './items.css'
import { renderFunctions } from '@/components/main/main.js'

export function createItem(text, iconSrc) {
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