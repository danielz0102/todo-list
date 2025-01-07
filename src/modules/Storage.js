import { Project } from './Project.js'
import { Todo } from './Todo.js'

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

  const deserializeProject = project => {
    const newProject = new Project(project.name)
    newProject.id = project.id
    newProject.todos = project.todos?.map(
      todo => deserializeTodo(todo)
    ) ?? []

    return newProject
  }

  const deserializeTodo = todo => {
    const newTodo = new Todo({
      title: todo.title,
      description: todo.description,
      dueDate: todo.dueDate,
      priority: todo.priority
    })
    newTodo.id = todo.id
    newTodo.complete = todo.complete
    
    return newTodo
  }

  const getProjects = () => {
    const rawData = JSON.parse(localStorage.getItem('projects')) ?? []

    return rawData.map(project => deserializeProject(project))
  }

  const addProject = project => {
    const projects = getProjects()
    projects.push(project)
    saveProjects(projects)
  }

  const removeProject = id => {
    const projects = getProjects().filter(p => p.id !== id)
    saveProjects(projects)
  }

  const updateProject = project => {
    const projects = getProjects().map(p => {
      if (p.id === project.id) {
        return project
      }

      return p
    })

    saveProjects(projects)
  }

  const getProject = id => {
    const project = getProjects().find(project => project.id === id)

    if (!project) {
      throw new Error(`Project with id ${id} not found`)
    }

    return project
  }

  init()

  return {
    getProjects,
    addProject,
    removeProject,
    updateProject,
    getProject,
  }
})()