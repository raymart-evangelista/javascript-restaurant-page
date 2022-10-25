// function component() {
//   const element = document.createElement('div');

//   element.textContent = 'Hello test!';
//   return element;
// }

// document.body.appendChild(component());

import './style.css'
import food from './food-image.jpg'
import { pageLoad } from './pageLoad'

pageLoad()

const div = document.getElementById("content")

const headline = document.createElement('h1')
headline.innerHTML = 'This is a restaurant page'
headline.classList = 'text'

const image = new Image()
image.src = food
image.classList = "image"

const about = document.createElement('h2')
about.innerHTML = 'We have multiple locations in California, Texas, and New York. Please confirm the location when you order pickup or delivery.'

div.appendChild(headline)
div.appendChild(image)
div.appendChild(about)