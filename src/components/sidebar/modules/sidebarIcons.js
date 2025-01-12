import addIcon from '@/assets/icons/add.svg'
import projectIcon from '@/assets/icons/project.svg'
import { createIcon } from '@/components/icon/icon.js'

/*Add a callback function to be able to reutilize each icon
instead of save its reference*/
export const sidebarIcons = {
  add: () => createIcon({ src: addIcon, alt: 'Plus icon' }),
  project: () => createIcon({ src: projectIcon, alt: 'Hashtag icon' }),
}