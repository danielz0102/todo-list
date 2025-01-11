import './this-month.css'

export function createThisMonthPage() {
  const ThisMonth = document.createElement('div')
  ThisMonth.id = 'thisMonth'

  const title = document.createElement('h1')
  title.textContent = 'This Month'

  ThisMonth.appendChild(title)

  return ThisMonth
}