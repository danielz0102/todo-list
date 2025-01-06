import './main.css'
import { createProjectPage } from '@/pages/project/project.js'
import { Storage } from '@/modules/Storage.js'
import handleEvents from './modules/eventHandlers.js'

export function createMain() {
  const Main = document.createElement('main')
  const firstProject = Storage.getProjects()[0]
  const initialPage = createProjectPage(firstProject)

  Main.replaceChildren(initialPage)
  handleEvents(Main)

  return Main
}