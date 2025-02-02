import { createProjectPage } from '@/pages/project/project.js'
import { createProjectDeletedPage } from '@/pages/projectDeleted/projectDeleted.js'
import { Storage } from '@/modules/Storage.js'

let newPage

function handleRendering(Main) {
  document.addEventListener('renderMain', e => {
    const projects = Storage.getProjects()
    const project = projects.find(project => project.id === e.detail.projectId)
    newPage = createProjectPage(project)

    Main.replaceChildren(newPage)
  })
}

function handlePageDeleted(Main) {
  document.addEventListener('projectDeleted', () => {
    newPage = createProjectDeletedPage()
    Main.replaceChildren(newPage)
  })
}

export default function handleEvents(Main) {
  handleRendering(Main)
  handlePageDeleted(Main)
}