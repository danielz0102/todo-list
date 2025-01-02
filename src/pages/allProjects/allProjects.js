import './all-projects.css'
import { Storage } from '@/modules/Storage.js'
import { createMenu } from '@/components/menu/menu.js'

const AllProjects = document.createElement('section')
AllProjects.id = 'allProjects'

const title = document.createElement('h1')
title.textContent = 'All Projects'

AllProjects.appendChild(title)

const projects = Storage.getProjects()

const lists = projects.map(project => createMenu({
  title: project.name,
  wrapperType: 'ul',
}))

AllProjects.append(...lists)

export { AllProjects }