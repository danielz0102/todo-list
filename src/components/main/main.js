import './main.css'
import { createProjectPage } from '@/pages/project/project.js'
import { createAllProjectsPage } from '@/pages/allProjects/allProjects.js'
import { Storage } from '@/modules/Storage.js'

export function createMain() {
  const Main = document.createElement('main')
  Main.replaceChildren(createProjectPage(Storage.getProjects()[0]))

  handleEvents(Main)

  return Main
}

function handleEvents(Main) {
  let newPage

  document.addEventListener('renderMain', e => {
    if (e.detail.projectId) {
      const projects = Storage.getProjects()
      const project = projects.find(project => project.id === e.detail.projectId)
      newPage = createProjectPage(project)

      Main.replaceChildren(newPage)

      return
    }

    newPage = e.detail.createPage()

    Main.replaceChildren(newPage)
  })

  document.addEventListener('projectDeleted', () => {
    newPage = createAllProjectsPage()
    Main.replaceChildren(newPage)
  })
}