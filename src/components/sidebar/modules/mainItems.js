import { createItem } from '@/components/sidebar/components/item/item.js'
import { sidebarIcons } from '@/components/sidebar/modules/sidebarIcons.js'
import { dispatchRenderEvent } from '@/components/sidebar/modules/dispatchEvent.js'
import { createTodayPage } from '@/pages/today/today.js'
import { createThisWeekPage } from '@/pages/thisWeek/thisWeek.js'
import { createThisMonthPage } from '@/pages/thisMonth/thisMonth.js'

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
    text: 'This Month',
    icon: sidebarIcons.all(),
    clickHandler: () => dispatchRenderEvent({ page: createThisMonthPage })
  }),
]