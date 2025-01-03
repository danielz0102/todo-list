import './main.css'
import { Today } from '@/pages/today/today.js'
import { ThisWeek } from '@/pages/thisWeek/thisWeek.js'
import { createAllProjectsSection } from '@/pages/allProjects/allProjects.js'

function renderPage(page) {
  Main.replaceChildren()
  Main.appendChild(page)
}

const renderFunctions = {
  today() {
    renderPage(Today)
  },
  thisWeek() {
    renderPage(ThisWeek)
  },
  allProjects() {
    renderPage(createAllProjectsSection())
  }
}

const Main = document.createElement('main')

renderFunctions.allProjects()

export { Main, renderFunctions }