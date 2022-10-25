import './style.css'

const header = () => {

  const content = document.getElementById("content")

  const headerContainer = document.createElement('header')
  headerContainer.classList = "flex w-full border-4 border-sky-500 place-content-evenly"
  content.appendChild(headerContainer)

  const home = document.createElement('button')
  home.textContent = "HOME"
  home.id = "home"
  home.classList = "text-lg lg:text-3xl text-sky-500 text-center hover:bg-sky-700"
  home.tabIndex = 0
  headerContainer.appendChild(home)


  const menu = document.createElement('button')
  menu.id = "menu"
  menu.textContent = "MENU"
  menu.classList = "text-lg lg:text-3xl text-sky-500 text-center hover:bg-sky-700"
  menu.tabIndex = 0
  headerContainer.appendChild(menu)


  const contact = document.createElement('button')
  contact.id = "contact"
  contact.textContent = "CONTACT"
  contact.classList = "text-lg lg:text-3xl text-sky-500 text-center hover:bg-sky-700"
  contact.tabIndex = 0
  headerContainer.appendChild(contact)

  


}

export { header };