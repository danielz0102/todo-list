import './items.css'

export function createItem({
  text,
  iconSrc,
  clickHandler = null,
  params = {},
}) {
  const item = document.createElement('button')
  item.classList.add('menu__item')

  const icon = new Image()
  icon.src = iconSrc
  icon.classList.add('icon')
  icon.alt = `${text} icon`

  item.append(icon, text)

  if (clickHandler) {
    item.addEventListener('click', () => clickHandler(params))
  }

  return item
}