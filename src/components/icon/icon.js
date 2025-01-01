import './icon.css'

export function createIcon({ src, alt }) {
  const icon = new Image()
  icon.src = src
  icon.alt = alt
  icon.classList.add('icon')

  return icon
}