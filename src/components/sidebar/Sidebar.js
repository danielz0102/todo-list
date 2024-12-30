import './sidebar.css'
import { Menu } from './components/menu/Menu.js'
import { MyProjects } from './components/myProjects/MyProjects.js'

function createSidebar() {
  const sidebar = document.createElement('aside')
  sidebar.id = 'sidebar'

  const title = document.createElement('h2')
  title.textContent = 'Welcome'

  const divider = document.createElement('hr')

  sidebar.append(title, Menu, divider, MyProjects)

  return sidebar
}

export const Sidebar = createSidebar()