import './projectsMenu.css'
import { createItem } from '@/components/sidebar/components/item/item.js'
import { createMenu } from '@/components/menu/menu.js'
import { Storage } from '@/modules/Storage.js'
import { Project } from '@/modules/Project.js'
import { sidebarIcons } from '@/components/sidebar/modules/sidebarIcons.js'
import { dispatchRenderEvent } from '@/components/sidebar/modules/dispatchEvent.js'

const params = {
  title: 'My Projects',
  items: [],
  fallback: 'No projects yet',
  id: 'projectsMenu',
}

export function createProjectsMenu() {
  const projects = Storage.getProjects()
  setItems(projects)

  const menu = createMenu(params)

  const addProjectItem = createItem({
    text: 'Add Project',
    icon: sidebarIcons.add(),
    clickHandler: () => {
      Storage.addProject(new Project('New Project!'))
      updateProjects()
    }
  })
  menu.appendChild(addProjectItem)

  document.addEventListener('projectDeleted', updateProjects)
  document.addEventListener('projectTitleUpdated', updateProjects)

  return menu
}

function updateProjects() {
  const projects = Storage.getProjects()
  setItems(projects)

  const newMenu = createMenu({
    items: params.items,
    fallback: params.fallback,
  })
  document.querySelector('#projectsMenu').replaceChildren(...newMenu.children)
}

function setItems(projects) {
  params.items = projects.map(project =>
    createItem({
      text: project.name,
      icon: sidebarIcons.project(),
      clickHandler: () => dispatchRenderEvent({ projectId: project.id }),
    })
  )
}