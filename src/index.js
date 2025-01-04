// Supports weights 300-900
import '@fontsource-variable/rubik'
// Supports weights 200-900
import '@fontsource-variable/nunito'
import '@/index.css'
import { Storage } from '@/modules/Storage.js'
import { createSidebar } from '@/components/sidebar/sidebar.js'
import { createMain } from '@/components/main/main.js'

localStorage.clear()
Storage.init()

const Main = createMain()
const Sidebar = createSidebar()

document.querySelector('#app').append(Sidebar, Main)