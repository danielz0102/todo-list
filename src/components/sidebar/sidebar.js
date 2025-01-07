import './sidebar.css'
import { createProjectsMenu } from './components/projectsMenu/projectsMenu.js'
import { createMainMenu } from './components/mainMenu/mainMenu.js'

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