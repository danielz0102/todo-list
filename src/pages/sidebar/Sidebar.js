import './sidebar.css'
import { Menu } from './components/menu/Menu.js'
import { MyProjects } from './components/myProjects/MyProjects.js'

const Sidebar = document.createElement('aside')
Sidebar.id = 'sidebar'

const title = document.createElement('h2')
title.textContent = 'Welcome'

const divider = document.createElement('hr')

Sidebar.append(title, Menu, divider, MyProjects)

export { Sidebar }