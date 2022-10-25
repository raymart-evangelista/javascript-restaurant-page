import './style.css'

const contact = () => {
  const content = document.getElementById("content")

  const contactCard = document.createElement('div')
  contactCard.classList = "m-4 p-4 xl:w-1/3 border-4 border-sky-500"
  content.appendChild(contactCard)

  const title = document.createElement('h1')
  title.classList = "text-2xl text-sky-500 text-center"
  title.textContent = "CONTACT US!"
  title.tabIndex = 0
  contactCard.appendChild(title)

  const phone = document.createElement('h1')
  phone.classList = "text-lg text-sky-500 text-center"
  phone.textContent = "Phone Number: 559-222-0555"
  phone.tabIndex = 0
  contactCard.appendChild(phone)

  const email = document.createElement('h1')
  email.classList = "text-lg text-sky-500 text-center"
  email.textContent = "Email: laboufresno@gmail.com"
  email.tabIndex = 0
  contactCard.appendChild(email)
}

export { contact }