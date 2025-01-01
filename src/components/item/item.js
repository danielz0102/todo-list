import './item.css'

export function createItem({
  text,
  icon,
  clickHandler = null,
  params = {},
  hoverColor = '#fff',
}) {
  const item = document.createElement('button')
  item.classList.add('item')
  item.style.setProperty('--hover-color', hoverColor)
  item.append(icon, text)

  if (clickHandler) {
    item.addEventListener('click', () => clickHandler(params))
  }

  return item
}