import './main.css'
import { createAllProjectsPage } from '@/pages/allProjects/allProjects.js'
import { createProjectPage } from '@/pages/project/project.js'
import { Storage } from '@/modules/Storage.js'

function renderPage(page) {
  Main.replaceChildren(page)
}

const Main = document.createElement('main')

renderPage(createProjectPage(Storage.getProjects()[0]))

export { Main, renderPage }