import './item.css'

export function createItem({
  text,
  icon,
  clickHandler = null,
  params = {},
}) {
  const item = document.createElement('button')
  item.classList.add('menu__item')

  item.append(icon, text)

  if (clickHandler) {
    item.addEventListener('click', () => clickHandler(params))
  }

  return item
}