import './main.css'
import { Today } from './components/today/Today.js'

const Main = document.createElement('main')

Main.appendChild(Today)

Main.render = page => {
  Main.innerHTML = ''
  Main.appendChild(page)
}

export { Main }