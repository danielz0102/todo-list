// Supports weights 300-900
import '@fontsource-variable/rubik'
// Supports weights 200-900
import '@fontsource-variable/nunito'
import '@/index.css'
import { Storage } from '@/modules/Storage.js'
import { Sidebar } from '@/components/sidebar/sidebar.js'
import { Main } from '@/components/main/main.js'

Storage.init()

document.querySelector('#app').append(Sidebar, Main)