export function dispatchRenderEvent({ page = null, projectId = null }) {
  if (!page && !projectId) {
    throw new Error('You must provide either a page or a projectId')
  }

  const detailParam = {
    detail: {
      createPage: page,
      projectId,
    }
  }

  const renderMainEvent = new CustomEvent('renderMain', detailParam)

  document.dispatchEvent(renderMainEvent)
}