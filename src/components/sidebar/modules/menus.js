import { createItem } from '@/components/item/item.js'
import { createMenu } from '@/components/menu/menu.js'
import { Storage } from '@/modules/Storage.js'
import { Project } from '@/modules/Project.js'
import { createTodayPage } from '@/pages/today/today.js'
import { createThisWeekPage } from '@/pages/thisWeek/thisWeek.js'
import { createAllProjectsPage } from '@/pages/allProjects/allProjects.js'
import { sidebarIcons } from './icons.js'

function dispatchRenderEvent({ page = null, projectId = null }) {
  if (!page && !projectId) {
    throw new Error('You must provide either a page or a projectId')
  }

  document.dispatchEvent(new CustomEvent('renderMain', {
    detail: {
      createPage: page,
      projectId,
    }
  }))
}

function createMainMenu() {
  const mainItems = [
    createItem({
      text: 'Today',
      icon: sidebarIcons.today(),
      clickHandler: () => dispatchRenderEvent({ page: createTodayPage })
    }),
    createItem({
      text: 'This Week',
      icon: sidebarIcons.week(),
      clickHandler: () => dispatchRenderEvent({ page: createThisWeekPage })
    }),
    createItem({
      text: 'All Projects',
      icon: sidebarIcons.all(),
      clickHandler: () => dispatchRenderEvent({ page: createAllProjectsPage })
    }),
  ]

  return createMenu({ items: mainItems, id: 'mainMenu' })
}

function createProjectsMenu() {
  const params = {
    title: 'My Projects',
    items: [],
    fallback: 'No projects yet',
    id: 'projectsMenu',
  }

  const updateProjects = () => {
    const projects = Storage.getProjects()
    setItems(projects)

    const newMenu = createMenu({
      items: params.items,
      fallback: params.fallback,
    })
    document.querySelector('#projectsMenu').replaceChildren(...newMenu.children)

    if (document.querySelector('#allProjects')) {
      dispatchRenderEvent({ page: createAllProjectsPage })
    }
  }

  const setItems = projects => {
    params.items = projects.map(project =>
      createItem({
        text: project.name,
        icon: sidebarIcons.project(),
        clickHandler: () => dispatchRenderEvent({ projectId: project.id}),
      })
    )
  }

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

  return menu
}

export { createMainMenu, createProjectsMenu }