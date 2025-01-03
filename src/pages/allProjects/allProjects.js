import './all-projects.css'
import { Storage } from '@/modules/Storage.js'
import { createMenu } from '@/components/menu/menu.js'

export function createAllProjectsSection() {
  const AllProjects = document.createElement('section')
  AllProjects.id = 'allProjects'

  const title = document.createElement('h1')
  title.textContent = 'All Projects'

  AllProjects.appendChild(title)

  const projects = Storage.getProjects()

  const lists = projects.map(project => createMenu({
    title: project.name,
    wrapperType: 'ul',
    id: 'projectList',
  }))

  AllProjects.append(...lists)

  return AllProjects
}