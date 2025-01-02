import { createItem } from '@/components/item/item.js'
import { createMenu } from '@/components/menu/menu.js'
import { Storage } from '@/modules/Storage.js'
import { renderFunctions } from '@/components/main/main.js'
import { sidebarIcons } from './icons.js'

const MainMenu = (() => {
  const mainItems = [
    createItem({
      text: 'Today',
      icon: sidebarIcons.today,
      clickHandler: renderFunctions.today
    }),
    createItem({
      text: 'This Week',
      icon: sidebarIcons.week,
      clickHandler: renderFunctions.thisWeek
    }),
    createItem({
      text: 'All Projects',
      icon: sidebarIcons.all,
      clickHandler: renderFunctions.allProjects
    }),
  ]

  return createMenu({ items: mainItems })
})()

const ProjectsMenu = (() => {
  const projects = Storage.getProjects()
  const props = {
    title: 'My Projects',
    items: [],
    fallback: ''
  }

  if (projects.length > 0) {
    props.items = projects.map(project =>
      createItem({
        text: project.name,
        icon: sidebarIcons.project,
      })
    )
  } else {
    props.fallback = 'No projects yet'
  }

  props.items.push(createItem({
    text: 'Add Project',
    icon: sidebarIcons.add,
  }))

  return createMenu(props)
})()

export { MainMenu, ProjectsMenu }