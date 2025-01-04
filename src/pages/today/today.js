import './today.css'

export function createTodayPage() {
  const Today = document.createElement('div')
  Today.id = 'today'

  const title = document.createElement('h1')
  title.textContent = 'Today'

  Today.append(title)

  return Today
}