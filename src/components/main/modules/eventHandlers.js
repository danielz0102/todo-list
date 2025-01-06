import { createAllProjectsPage } from '@/pages/allProjects/allProjects.js'
import { createProjectPage } from '@/pages/project/project.js'
import { Storage } from '@/modules/Storage.js'

let newPage

function handleRendering(Main) {
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
}

function handlePageDeleted(Main) {
  document.addEventListener('projectDeleted', () => {
    newPage = createAllProjectsPage()
    Main.replaceChildren(newPage)
  })
}

export default function handleEvents(Main) {
  handleRendering(Main)
  handlePageDeleted(Main)
}