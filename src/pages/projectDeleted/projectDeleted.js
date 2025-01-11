export function createProjectDeletedPage() {
  const ProjectDeleted = document.createElement('div')
  ProjectDeleted.id = 'projectDeleted'

  const title = document.createElement('h1')
  title.textContent = 'The project has been deleted'

  ProjectDeleted.appendChild(title)

  return ProjectDeleted
}