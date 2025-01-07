export function dispatchRenderEvent({ page = null, projectId = null }) {
  if (!page && !projectId) {
    throw new Error('You must provide either a page or a projectId')
  }

  document.dispatchEvent(new CustomEvent('renderMain', {
    detail: {
      createPage: page,
      projectId,
    }
  }))
}