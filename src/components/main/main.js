import './main.css'
import { createProjectPage } from '@/pages/project/project.js'
import { Storage } from '@/modules/Storage.js'

export function createMain() {
  const Main = document.createElement('main')
  Main.replaceChildren(createProjectPage(Storage.getProjects()[0]))

  document.addEventListener('renderMain', e => {
    if (e.detail.projectId) {
      const projects = Storage.getProjects()
      const project = projects.find(project => project.id === e.detail.projectId)
      Main.replaceChildren(createProjectPage(project))
      return
    }

    Main.replaceChildren(e.detail.createPage())
  })

  return Main
}