// Supports weights 300-900
import '@fontsource-variable/rubik'
// Supports weights 200-900
import '@fontsource-variable/nunito'
import '@/index.css'
import { UI } from '@/modules/UI.js'
import { Storage } from '@/modules/Storage.js'

localStorage.clear()
Storage.init()
UI.init()