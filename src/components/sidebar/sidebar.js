import './sidebar.css'
import { createProjectsMenu } from './components/projectsMenu/projectsMenu.js'
import { createMenu } from '@/components/menu/menu.js'
import { mainItems } from './modules/mainItems.js'

export function createSidebar() {
  const Sidebar = document.createElement('aside')
  Sidebar.id = 'sidebar'

  const title = document.createElement('h2')
  title.textContent = 'Welcome'

  const divider = document.createElement('hr')
  const MainMenu = createMenu({ items: mainItems, id: 'mainMenu' })
  const ProjectsMenu = createProjectsMenu()
  
  Sidebar.append(
    title,
    MainMenu,
    divider,
    ProjectsMenu
  )
  
  return Sidebar
}