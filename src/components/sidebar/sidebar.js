import './sidebar.css'
import { createProjectsMenu } from './components/projectsMenu/projectsMenu.js'

export function createSidebar() {
  const Sidebar = document.createElement('aside')
  Sidebar.id = 'sidebar'

  const title = document.createElement('h2')
  title.textContent = 'Todo List App'

  const ProjectsMenu = createProjectsMenu()
  
  Sidebar.append(
    title,
    ProjectsMenu
  )
  
  return Sidebar
}