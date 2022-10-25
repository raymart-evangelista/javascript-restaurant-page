import './style.css'
import FoodImage from './food-image.jpg';
import PokeImage from './poke.jpg';

const home = () => {
  // document.body.classList = "bg-[url('./food-image.jpg')]"
  // document.body.style.backgroundImage = "url(./french-bakery3.jpg)"

  const content = document.getElementById("content")
  content.classList = "flex flex-col flex justify-center items-center gap-10"
  // content.style = "background-image: url('./food-image.jpg')"
  // content.classList = "bg-scroll"

  const nameCard = document.createElement('div')
  nameCard.classList = "m-4 p-4 xl:w-1/3 border-4 border-sky-500"
  content.appendChild(nameCard)

  const name = document.createElement('h1')
  name.textContent = "LA BOULANGERIA"
  name.classList = "text-4xl text-sky-500 text-center"
  name.tabIndex = 0
  nameCard.appendChild(name)

  const desc = document.createElement('h2')
  desc.textContent = "FRENCH BAKERY & CAFE"
  desc.classList = "text-xl text-sky-500 text-center"
  desc.tabIndex = 0
  nameCard.appendChild(desc)

  const hoursCard = document.createElement('div')
  hoursCard.classList = "m-4 p-4 xl:w-1/3 border-4 border-sky-500"
  content.appendChild(hoursCard)

  const hours = document.createElement('h1')
  hours.textContent = "HOURS"
  hours.classList = "text-xl text-sky-500 text-center"
  hours.tabIndex = 0
  hoursCard.appendChild(hours)

  const timeContainer = document.createElement('div')
  timeContainer.classList = "flex flex-col items-center"
  hoursCard.appendChild(timeContainer)

  const timeWrapper = document.createElement('div')
  timeContainer.appendChild(timeWrapper)

  const hoursMon = document.createElement('h2')
  hoursMon.textContent = "MONDAY 6:30AM - 6:00PM"
  hoursMon.classList = "text-md text-sky-500 text-left"
  hoursMon.tabIndex = 0
  timeWrapper.appendChild(hoursMon)

  const hoursTue = document.createElement('h2')
  hoursTue.textContent = "TUESDAY 6:30AM - 6:00PM"
  hoursTue.classList = "text-md text-sky-500 text-left"
  hoursTue.tabIndex = 0
  timeWrapper.appendChild(hoursTue)

  const hoursWed = document.createElement('h2')
  hoursWed.textContent = "WEDNESDAY 6:30AM - 6:00PM"
  hoursWed.classList = "text-md text-sky-500 text-left"
  hoursWed.tabIndex = 0
  timeWrapper.appendChild(hoursWed)

  const hoursThu = document.createElement('h2')
  hoursThu.textContent = "THURSDAY 6:30AM - 6:00PM"
  hoursThu.classList = "text-md text-sky-500 text-left"
  hoursThu.tabIndex = 0
  timeWrapper.appendChild(hoursThu)

  const hoursFri = document.createElement('h2')
  hoursFri.textContent = "FRIDAY 6:30AM - 6:00PM"
  hoursFri.classList = "text-md text-sky-500 text-left"
  hoursFri.tabIndex = 0
  timeWrapper.appendChild(hoursFri)

  const hoursSat = document.createElement('h2')
  hoursSat.textContent = "SATURDAY 6:30AM - 6:00PM"
  hoursSat.classList = "text-md text-sky-500 text-left"
  hoursSat.tabIndex = 0
  timeWrapper.appendChild(hoursSat)

  const hoursSun = document.createElement('h2')
  hoursSun.textContent = "SUNDAY 9:00AM - 3:00PM"
  hoursSun.classList = "text-md text-sky-500 text-left"
  hoursSun.tabIndex = 0
  timeWrapper.appendChild(hoursSun)



  const startedCard = document.createElement('div')
  startedCard.classList = "m-4 p-4 md:w-1/2 border-4 border-sky-500"
  content.appendChild(startedCard)

  const startedHeader = document.createElement('h1')
  startedHeader.textContent = "HOW IT STARTED:"
  startedHeader.classList = "text-xl text-sky-500 text-center"
  startedHeader.tabIndex = 0
  startedCard.appendChild(startedHeader)

  const startedDesc = document.createElement('h2')
  startedDesc.textContent = "La Boulangerie opened on November 1, 1980 and we have been in the Fig Garden location since 1985. La Boulangerie is a bakery with strong French influence which emphasizes the usage of fresh and wholesome ingredients. For nearly 40 years, we are proud to be serving locally grown products in our baking and cooking. From creating a cake for a special occasion to a fresh baked Danish out on our patio, we strive to be your neighborhood bakery. We hope that you will enjoy what we have to offer."
  startedDesc.classList = "text-md text-sky-500 text-center"
  startedDesc.tabIndex = 0
  startedCard.appendChild(startedDesc)

  const socialCard = document.createElement('div')
  socialCard.classList = "m-4 p-4 xl:w-1/3 border-4 border-sky-500"
  content.appendChild(socialCard)

  const socialText = document.createElement('h1')
  socialText.textContent = "FOLLOW US ON SOCIAL MEDIA!"
  socialText.classList = "text-xl text-sky-500 text-center"
  socialText.tabIndex = 0
  socialCard.appendChild(socialText)

  // const myImage = new Image();
  // myImage.classList = ""
  // myImage.src = PokeImage;

  // document.body.appendChild(myImage)
  // document.body.appendChild(content)

  // content.appendChild(myImage);
}

export { home };