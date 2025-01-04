import { createItem } from '@/components/item/item.js'
import { createMenu } from '@/components/menu/menu.js'
import { Storage } from '@/modules/Storage.js'
import { Project } from '@/modules/Project.js'
import { createTodayPage } from '@/pages/today/today.js'
import { createThisWeekPage } from '@/pages/thisWeek/thisWeek.js'
import { createAllProjectsPage } from '@/pages/allProjects/allProjects.js'
import { sidebarIcons } from './icons.js'

function createMainMenu() {
  const mainItems = [
    createItem({
      text: 'Today',
      icon: sidebarIcons.today(),
      clickHandler: () => {
        document.dispatchEvent(new CustomEvent('renderMain', {
          detail: {
            createPage: createTodayPage,
          }
        }))
      }
    }),
    createItem({
      text: 'This Week',
      icon: sidebarIcons.week(),
      clickHandler: () => {
        document.dispatchEvent(new CustomEvent('renderMain', {
          detail: {
            createPage: createThisWeekPage,
          }
        }))
      }
    }),
    createItem({
      text: 'All Projects',
      icon: sidebarIcons.all(),
      clickHandler: () => {
        document.dispatchEvent(new CustomEvent('renderMain', {
          detail: {
            createPage: createAllProjectsPage,
          }
        }))
      }
    }),
  ]

  return createMenu({ items: mainItems, id: 'mainMenu' })
}

function createProjectsMenu() {
  const Main = document.querySelector('main')
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
      Main.replaceChildren(createAllProjectsPage())
    }
  }

  function setItems(projects) {
    if (projects.length > 0) {
      props.items = projects.map(project =>
        createItem({
          text: project.name,
          icon: sidebarIcons.project(),
          clickHandler: () => {
            document.dispatchEvent(new CustomEvent('renderMain', {
              detail: {
                /*The projects rendered in sidebar could not have the whole up-to-date info.
                To be sure the project is up-to-date before render it, only its id is send 
                in order to get it from Storage*/
                projectId: project.id,
              }
            })
            )
          },
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
}

export { createMainMenu, createProjectsMenu }