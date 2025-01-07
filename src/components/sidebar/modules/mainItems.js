import { createItem } from '@/components/sidebar/components/item/item.js'
import { sidebarIcons } from '@/components/sidebar/modules/sidebarIcons.js'
import { dispatchRenderEvent } from '@/components/sidebar/modules/dispatchEvent.js'
import { createTodayPage } from '@/pages/today/today.js'
import { createThisWeekPage } from '@/pages/thisWeek/thisWeek.js'
import { createAllProjectsPage } from '@/pages/allProjects/allProjects.js'

export const mainItems = [
  createItem({
    text: 'Today',
    icon: sidebarIcons.today(),
    clickHandler: () => dispatchRenderEvent({ page: createTodayPage })
  }),
  createItem({
    text: 'This Week',
    icon: sidebarIcons.week(),
    clickHandler: () => dispatchRenderEvent({ page: createThisWeekPage })
  }),
  createItem({
    text: 'All Projects',
    icon: sidebarIcons.all(),
    clickHandler: () => dispatchRenderEvent({ page: createAllProjectsPage })
  }),
]