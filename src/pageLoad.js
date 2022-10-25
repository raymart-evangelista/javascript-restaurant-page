import './style.css'
import FoodImage from './food-image.jpg';
import PokeImage from './poke.jpg';

const pageLoad = () => {
  // document.body.classList = "bg-[url('./food-image.jpg')]"
  // document.body.classList = "bg-[url('./poke.jpg')] w-1/2 h-1/2"

  const content = document.getElementById("content")
  // content.style = "background-image: url('./food-image.jpg')"
  // content.classList = "bg-scroll"

  const name = document.createElement('h1')
  name.textContent = "LA BOULANGERIA"
  name.classList = "text-4xl text-blue-700"
  content.appendChild(name)

  const desc = document.createElement('h2')
  desc.textContent = "FRENCH BAKERY & CAFE"
  desc.classList = "text-xl text-blue-700"
  content.appendChild(desc)

  const myImage = new Image();
  myImage.classList = ""
  myImage.src = PokeImage;

  document.body.appendChild(myImage)
  // document.body.appendChild(content)

  // content.appendChild(myImage);
}

export { pageLoad };