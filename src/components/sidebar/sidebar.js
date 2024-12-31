import './sidebar.css'
import { createItem } from './components/items/items.js'
import { createMenu } from './components/menu/menu.js'
import { Storage } from '@/modules/Storage.js'
import todayIcon from '@/assets/icons/today.svg'
import allIcon from '@/assets/icons/all.svg'
import weekIcon from '@/assets/icons/week.svg'
import addIcon from '@/assets/icons/add.svg'

const Sidebar = document.createElement('aside')
Sidebar.id = 'sidebar'

const title = document.createElement('h2')
title.textContent = 'Welcome'

const divider = document.createElement('hr')

const MainMenu = (() => {
  const mainItems = [
    createItem('Today', todayIcon),
    createItem('This Week', weekIcon),
    createItem('All Projects', allIcon),
  ]
  const menu = createMenu({ items: mainItems })
  
  return menu
})()

const ProjectsMenu = (() => {
  const projects = Storage.getProjects()
  const props = {
    title: 'My Projects',
    items: [],
    fallback: ''
  }

  if (projects.length > 0) {
    props.items = projects.map(project => createItem(project.name, todayIcon))
  } else {
    props.fallback = 'No projects yet'
  }

  props.items.push(createItem('Add Project', addIcon))

  return createMenu(props)
})()

Sidebar.append(
  title,
  MainMenu,
  divider,
  ProjectsMenu
)

export { Sidebar }