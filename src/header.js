import './style.css'

const header = () => {

  const content = document.getElementById("content")

  const headerContainer = document.createElement('header')
  headerContainer.classList = "flex w-full border-4 border-sky-500 place-content-evenly"
  content.appendChild(headerContainer)

  const home = document.createElement('h1')
  home.textContent = "HOME"
  home.classList = "text-lg lg:text-3xl text-sky-500 text-center"
  headerContainer.appendChild(home)

  const menu = document.createElement('h1')
  menu.textContent = "MENU"
  menu.classList = "text-lg lg:text-3xl text-sky-500 text-center"
  headerContainer.appendChild(menu)

  const contact = document.createElement('h1')
  contact.textContent = "CONTACT"
  contact.classList = "text-lg lg:text-3xl text-sky-500 text-center"
  headerContainer.appendChild(contact)
  


}

export { header };