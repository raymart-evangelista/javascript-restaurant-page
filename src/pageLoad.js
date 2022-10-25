import './style.css'
import FoodImage from './food-image.jpg';

const pageLoad = () => {
  console.log('page load function')

  const content = document.getElementById("content");

  const myImage = new Image();
  myImage.classList = "image"
  myImage.src = FoodImage;

  content.appendChild(myImage);
}

export { pageLoad };