import './all-projects.css'

const AllProjects = document.createElement('section')
AllProjects.id = 'allProjects'

const title = document.createElement('h1')
title.textContent = 'All Projects'

AllProjects.append(title)

export { AllProjects }