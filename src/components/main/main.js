import './main.css'
import { createAllProjectsPage } from '@/pages/allProjects/allProjects.js'
import { createProjectPage } from '@/pages/project/project.js'
import { Storage } from '@/modules/Storage.js'

const Main = document.createElement('main')

Main.replaceChildren(createProjectPage(Storage.getProjects()[0]))

export { Main }