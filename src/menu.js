import './style.css'

const menu = () => {
  const content = document.getElementById("content")

  const nameCard = document.createElement('div')
  nameCard.classList = "m-4 p-4 xl:w-1/3 border-4 border-sky-500"
  content.appendChild(nameCard)
}

export { menu }