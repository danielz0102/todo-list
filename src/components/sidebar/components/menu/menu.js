import './menu.css'
import { items } from './items.js'

const Menu = document.createElement('nav')
Menu.classList.add('menu')

items.forEach(icon => Menu.appendChild(icon))

export { Menu }