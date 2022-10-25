import './style.css'
import { header } from './header'
import { home } from './home'
import { menu } from './menu'
import { contact } from './contact'

document.body.onload = load()

function load() {
  document.body.classList = "bg-[url('./poke.jpg')]"
  console.log("body")
  header()
  home()
}

function loadEventListeners() {
  document.getElementById("home").addEventListener("click", handleHome)
  document.getElementById("menu").addEventListener("click", handleMenu)
  document.getElementById("contact").addEventListener("click", handleContact)
}

window.onload = () => {
  console.log("window")
  loadEventListeners()
}

const handleHome = () => {
  console.log("home")
  removeChildren()
  header()
  home()

  loadEventListeners()
}

const handleMenu = () => {
  console.log("menu")
  removeChildren()
  header()
  menu()

  loadEventListeners()
}

const handleContact = () => {
  console.log("contact")
  removeChildren()
  header()
  contact()

  loadEventListeners()
}

const removeChildren = () => {
  const content = document.getElementById('content')
  let child = content.lastElementChild
  while (child) {
    content.removeChild(child)
    child = content.lastElementChild
  }
}