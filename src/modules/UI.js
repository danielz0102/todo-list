import { Sidebar } from '@/components/sidebar/Sidebar'

export const UI = (() => {
  const init = () => {
    document.querySelector('#app').appendChild(Sidebar)
  }

  return { init }
})()