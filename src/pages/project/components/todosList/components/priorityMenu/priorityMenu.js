import './priorityMenu.css'
import { createMenu } from '@/components/menu/menu.js'
import { PRIORITIES } from '@/modules/Todo.js'
import { createPriorityLabel } from '../todoCard/components/priorityLabel/priorityLabel.js'

export function createPriorityMenu() {
  const items = Object.values(PRIORITIES).map(priority => createPriorityLabel({ priority }))
  
  const priorityMenu = createMenu({
    items,
    wrapperType: 'div'
  })
  priorityMenu.id = 'priorityMenu'
  priorityMenu.setAttribute('popover', '')
  
  document.addEventListener('click', event => findPopoverBtn(event, priorityMenu))
  priorityMenu.addEventListener('beforetoggle', setMenuPosition)
  items.forEach(label => {
    label.addEventListener('click', event => handleClickItem(event, priorityMenu.popoverBtn))
  })

  return priorityMenu
}

function setMenuPosition(event) {
  if (event.newState === "open") {
    const menu = event.target
    const rect = menu.popoverBtn.getBoundingClientRect()
    
    menu.style.position = 'fixed'
    menu.style.top = `${rect.top - 10}px`
    menu.style.left = `${rect.left + 70}px`
  }
}

function findPopoverBtn(event, menu) {
  if (event.target.matches('[popovertarget="priorityMenu"]')) {
    menu.popoverBtn = event.target
  }
}

function handleClickItem(event, button) {
  const priority = event.target.textContent
  const updateEvent = new CustomEvent('priorityUpdated', { detail: {
    priority
  }})

  button.dispatchEvent(updateEvent)
}