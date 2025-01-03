import './today.css'

const Today = document.createElement('div')
Today.id = 'today'

const title = document.createElement('h1')
title.textContent = 'Today'

Today.append(title)

export { Today }