import todayIcon from '@/assets/icons/today.svg'
import allIcon from '@/assets/icons/all.svg'
import weekIcon from '@/assets/icons/week.svg'
import addIcon from '@/assets/icons/add.svg'
import projectIcon from '@/assets/icons/project.svg'
import { createIcon } from '@/components/icon/icon.js'

/*Add a callback function to be able to reutilize each icon
instead of save its reference*/
export const sidebarIcons = {
  today: () => createIcon({ src: todayIcon, alt: 'Day calendar icon' }),
  week: () => createIcon({ src: weekIcon, alt: 'Week calendar icon' }),
  all: () => createIcon({ src: allIcon, alt: 'Month calendar icon' }),
  add: () => createIcon({ src: addIcon, alt: 'Plus icon' }),
  project: () => createIcon({ src: projectIcon, alt: 'Hashtag icon' }),
}