import './sidebar.css'
import { MainMenu, ProjectsMenu } from './menus/menus.js'

const Sidebar = document.createElement('aside')
Sidebar.id = 'sidebar'

const title = document.createElement('h2')
title.textContent = 'Welcome'

const divider = document.createElement('hr')

Sidebar.append(
  title,
  MainMenu,
  divider,
  ProjectsMenu
)

export { Sidebar }