import { createItem } from '@/components/item/item.js'
import { createMenu } from '@/components/menu/menu.js'
import { Storage } from '@/modules/Storage.js'
import { renderFunctions } from '@/components/main/main.js'
import { sidebarIcons } from './icons.js'
import { Project } from '@/modules/Project.js'

const MainMenu = (() => {
  const mainItems = [
    createItem({
      text: 'Today',
      icon: sidebarIcons.today(),
      clickHandler: renderFunctions.today
    }),
    createItem({
      text: 'This Week',
      icon: sidebarIcons.week(),
      clickHandler: renderFunctions.thisWeek
    }),
    createItem({
      text: 'All Projects',
      icon: sidebarIcons.all(),
      clickHandler: renderFunctions.allProjects
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
      renderFunctions.allProjects()
    }
  }

  function setItems(projects) {
    if (projects.length > 0) {
      props.items = projects.map(project =>
        createItem({
          text: project.name,
          icon: sidebarIcons.project(),
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