import './main.css'
import { createAllProjectsPage } from '@/pages/allProjects/allProjects.js'

function renderPage(page) {
  Main.replaceChildren()
  Main.appendChild(page)
}

const Main = document.createElement('main')

renderPage(createAllProjectsPage())

export { Main, renderPage }