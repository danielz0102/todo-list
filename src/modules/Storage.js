import { Project } from './Project.js'

export const Storage = (() => {
  const init = () => {
    if (localStorage.length === 0) {
      const initProject = new Project('My First Project')
      saveProjects([initProject])
    }
  }

  const saveProjects = projects => {
    localStorage.setItem('projects', JSON.stringify(projects))
  }

  const getProjects = () => {
    const rawData = JSON.parse(localStorage.getItem('projects')) ?? []

    return rawData.map(project => {
      const newProject = new Project(project.name)
      newProject.todos = project.todos ?? []

      return newProject
    })
  }

  const addProject = project => {
    const projects = getProjects()
    projects.push(project)
    saveProjects(projects)
  }

  const removeProject = project => {
    const projects = getProjects().filter(p => p !== project)
    saveProjects(projects)
  }

  return { init, getProjects, addProject, removeProject }
})()