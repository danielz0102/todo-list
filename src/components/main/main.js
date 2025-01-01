import './main.css'
import { Today } from '@/pages/today/today.js'
import { ThisWeek } from '@/pages/thisWeek/thisWeek.js'
import { AllProjects } from '@/pages/allProjects/allProjects.js'

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
    renderPage(AllProjects)
  }
}

const Main = document.createElement('main')

Main.appendChild(AllProjects)

export { Main, renderFunctions }