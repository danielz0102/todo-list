import './my-projects.css'

function createSection() {
  const section = document.createElement('section')
  section.id = 'myProjects'

  const title = document.createElement('h3')
  title.textContent = 'My Projects'
  title.classList.add('menu__title')

  section.append(title)

  return section
}

export const MyProjects = createSection()