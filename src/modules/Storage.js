import { Project } from './Project.js'

export const Storage = (() => {
  const init = () => {
    if (localStorage.length === 0) {
      const initProject = new Project('My First Project')
      localStorage.setItem('projects', JSON.stringify([initProject]))
    }
  }

  const getProjects = () => {
    return JSON.parse(localStorage.getItem('projects'))
  }

  const addProject = project => {
    const projects = getProjects()
    projects.push(project)
    localStorage.setItem('projects', JSON.stringify(projects))
  }

  const removeProject = project => {
    const projects = getProjects().filter(p => p !== project)
    localStorage.setItem('projects', JSON.stringify(projects))
  }

  return { init, getProjects, addProject, removeProject }
})()