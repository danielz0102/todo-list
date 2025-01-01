import './all-projects.css'
import { createProjectCard } from './components/projectCard/projectCard.js'
import { Storage } from '@/modules/Storage.js'

const AllProjects = document.createElement('section')
AllProjects.id = 'allProjects'

const title = document.createElement('h1')
title.textContent = 'All Projects'

AllProjects.appendChild(title)

const projects = Storage.getProjects()
console.log(projects)

if (projects.length === 0) {
  const fallback = document.createElement('p')
  fallback.textContent = 'No projects yet'
  AllProjects.appendChild(fallback)
} else {
  const projectCards = projects.map(project => createProjectCard(project))
  AllProjects.append(...projectCards)
}

export { AllProjects }