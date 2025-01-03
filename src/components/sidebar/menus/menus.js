import { createItem } from '@/components/item/item.js'
import { createMenu } from '@/components/menu/menu.js'
import { renderPage } from '@/components/main/main.js'
import { Storage } from '@/modules/Storage.js'
import { Project } from '@/modules/Project.js'
import { Today } from '@/pages/today/today.js'
import { ThisWeek } from '@/pages/thisWeek/thisWeek.js'
import { createAllProjectsPage } from '@/pages/allProjects/allProjects.js'
import { createProjectPage } from '@/pages/project/project.js'
import { sidebarIcons } from './icons.js'

const MainMenu = (() => {
  const mainItems = [
    createItem({
      text: 'Today',
      icon: sidebarIcons.today(),
      clickHandler: () => renderPage(Today)
    }),
    createItem({
      text: 'This Week',
      icon: sidebarIcons.week(),
      clickHandler: () => renderPage(ThisWeek)
    }),
    createItem({
      text: 'All Projects',
      icon: sidebarIcons.all(),
      clickHandler: () => renderPage(createAllProjectsPage())
    }),
  ]

  return createMenu({ items: mainItems, id: 'mainMenu' })
})()

const ProjectsMenu = (() => {
  const projects = Storage.getProjects()
  const props = {
    title: 'My Projects',
    items: [],
    fallback: '',
    id: 'projectsMenu',
  }
  const addProjectItem = createItem({
    text: 'Add Project',
    icon: sidebarIcons.add(),
    clickHandler: () => {
      Storage.addProject(new Project('New Project!'))
      updateProjects()
    }
  })

  function updateProjects() {
    const projects = Storage.getProjects()
    setItems(projects)

    document.querySelector('#projectsMenu').replaceChildren(...props.items)

    if (document.querySelector('#allProjects')) {
      renderPage(createAllProjectsPage())
    }
  }

  function setItems(projects) {
    if (projects.length > 0) {
      props.items = projects.map(project =>
        createItem({
          text: project.name,
          icon: sidebarIcons.project(),
          clickHandler: () => renderPage(createProjectPage(project)),
        })
      )
    } else {
      props.fallback = 'No projects yet'
    }
  }

  setItems(projects)

  const menu = createMenu(props)
  menu.appendChild(addProjectItem)

  return menu
})()

export { MainMenu, ProjectsMenu }