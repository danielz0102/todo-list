import { Sidebar } from '@/pages/sidebar/Sidebar.js'
import { Main } from '@/pages/main/Main.js'

export const UI = (() => {
  const init = () => {
    document.querySelector('#app').append(Sidebar, Main)
  }

  return { init }
})()