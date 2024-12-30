import { Sidebar } from '@/components/sidebar/Sidebar.js'

export const UI = (() => {
  const init = () => {
    document.querySelector('#app').appendChild(Sidebar)
  }

  return { init }
})()