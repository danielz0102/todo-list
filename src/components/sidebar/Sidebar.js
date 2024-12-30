import './sidebar.css'

function createSidebar() {
  const sidebar = document.createElement('aside')
  sidebar.id = 'sidebar'

  const title = document.createElement('h2')
  title.textContent = 'Welcome'

  sidebar.append(title)

  return sidebar
}

export const Sidebar = createSidebar()