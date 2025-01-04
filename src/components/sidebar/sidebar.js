import './sidebar.css'
import { createMainMenu, createProjectsMenu } from './modules/menus.js'

export function createSidebar() {
  const Sidebar = document.createElement('aside')
  Sidebar.id = 'sidebar'

  const title = document.createElement('h2')
  title.textContent = 'Welcome'

  const divider = document.createElement('hr')
  
  const MainMenu = createMainMenu()
  const ProjectsMenu = createProjectsMenu()
  
  Sidebar.append(
    title,
    MainMenu,
    divider,
    ProjectsMenu
  )
  
  return Sidebar
}