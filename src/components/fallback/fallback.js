import './fallback.css'

export function createFallback(text) {
  const fallback = document.createElement('p')
  fallback.classList.add('fallback')
  fallback.textContent = text

  return fallback
}