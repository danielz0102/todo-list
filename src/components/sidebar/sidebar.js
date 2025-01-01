import './sidebar.css'
import { createItem } from './components/items/items.js'
import { createMenu } from './components/menu/menu.js'
import { Storage } from '@/modules/Storage.js'
import { renderFunctions } from '@/components/main/main.js'
import todayIcon from '@/assets/icons/today.svg'
import allIcon from '@/assets/icons/all.svg'
import weekIcon from '@/assets/icons/week.svg'
import addIcon from '@/assets/icons/add.svg'
import projectIcon from '@/assets/icons/project.svg'

const Sidebar = document.createElement('aside')
Sidebar.id = 'sidebar'

const title = document.createElement('h2')
title.textContent = 'Welcome'

const divider = document.createElement('hr')

const MainMenu = (() => {
  const mainItems = [
    createItem({ 
      text: 'Today',
      iconSrc: todayIcon,
      clickHandler: renderFunctions.today
    }),
    createItem({ 
      text: 'This Week',
      iconSrc: weekIcon,
      clickHandler: renderFunctions.thisWeek
    }),
    createItem({ 
      text: 'All Projects',
      iconSrc: allIcon,
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
      createItem({ text: project.name, iconSrc: projectIcon })
    )
  } else {
    props.fallback = 'No projects yet'
  }

  props.items.push(createItem({ text: 'Add Project', iconSrc: addIcon }))

  return createMenu(props)
})()

Sidebar.append(
  title,
  MainMenu,
  divider,
  ProjectsMenu
)

export { Sidebar }