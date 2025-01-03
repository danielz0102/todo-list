import './this-week.css'

const ThisWeek = document.createElement('div')
ThisWeek.id = 'thisWeek'

const title = document.createElement('h1')
title.textContent = 'This Week'

ThisWeek.append(title)

export { ThisWeek }