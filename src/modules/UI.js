import { Sidebar } from '@/components/sidebar/sidebar.js'
import { Main } from '@/components/main/main.js'

export const UI = (() => {
  const init = () => {
    document.querySelector('#app').append(Sidebar, Main)
  }

  return { init }
})()