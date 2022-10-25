import './style.css'
import FoodImage from './food-image.jpg';
import { pageLoad } from './pageLoad'

pageLoad()
const content = document.getElementById("content");

const myImage = new Image();
myImage.classList = "image"
myImage.src = FoodImage;

content.appendChild(myImage);
