import './menu.css'
import { items } from './items.js'

const Menu = document.createElement('Menu')
Menu.classList.add('menu')

Object.values(items).forEach(icon => Menu.appendChild(icon))

export { Menu }