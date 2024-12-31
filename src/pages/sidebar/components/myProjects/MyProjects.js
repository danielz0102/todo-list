import './my-projects.css'

const MyProjects = document.createElement('section')
MyProjects.id = 'myProjects'

const title = document.createElement('h3')
title.textContent = 'My Projects'
title.classList.add('menu__title')

MyProjects.append(title)

export { MyProjects }