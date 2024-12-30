import './sidebar.css'

function createSidebar() {
  const sidebar = document.createElement('aside')
  sidebar.id = 'sidebar'

  const title = document.createElement('h2')
  title.textContent = 'Welcome'

  const text = document.createElement('p')
  text.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'

  sidebar.append(title, text)

  return sidebar
}

export const Sidebar = createSidebar()