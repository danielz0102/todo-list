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

  const span = document.createElement('span')
  span.textContent = text
  
  item.append(icon, span)

  if (clickHandler) {
    item.addEventListener('click', () => clickHandler(params))
  }

  return item
}