import './style.css'

const menu = () => {
  const content = document.getElementById("content")

  // const itemCard = document.createElement('div')
  // itemCard.classList = "m-4 p-4 xl:w-1/3 border-4 border-sky-500"
  // content.appendChild(itemCard)

  const bread = {
    'Jalapeno and Cheese': 'The peppers and swiss cheese gives this bread a provocative and spicy flavor.',
    'Whole Wheat Sourdough': 'All natural sourdough with a blend of whole wheat and unbleached flour.',
    'Pan Levain': 'Natural levain with a blend of white, wheat and rye flour. Traditional bread in the French countryside.',
    'Country French': 'A blend of whole rye and unbleached flour. Good with soup, salad, and cheese.',
    'Tier': 'French and Rustique',
    '3 Seed Raisin Walnut': 'Whole wheat and unbleached flour with California raisins and walnuts. Used for our popular turkey sandwich.',
    'Brioche': 'This is one of the most beloved recipes. Very light, tender and full of flavor. This egg and butter bread will brighten any breakfast.',
    'Baguette': 'French, Rustique, Seeded, or Sourdough',
    'Rustique': 'This bread is baked "on a stone" which will give it a thick crust outside and airy and light texture inside. This bread will keep well and makes a great toast.'
  }

  const pastries = {
    'Tarts': 'Mix fruit, Berries, Lemon, Cherry, Blueberry, Chocolate, or Strawberry',
    'Mini Pastries': 'Fruit tarts, lemon tarts, chocolate tarts, cheesecakes, carrot cake, tiramisu, opera cake, cream puffs',
    'Cupcake': 'Vanilla, Chocolate, Red Velvet, or Marble, Carrot'
  }

  for (const [key, value] of Object.entries(bread)) {
    console.log(`${key}: ${value}`);

    const itemCard = document.createElement('div')
    itemCard.classList = "m-4 p-4 xl:w-1/3 border-4 border-sky-500"
    content.appendChild(itemCard)
    
    const itemName = document.createElement('h2')
    itemName.classList = "text-xl text-sky-500 text-left"
    itemName.tabIndex = 0
    itemName.textContent = key

    const itemDesc = document.createElement('h3')
    itemDesc.classList = "text-md text-sky-500"
    itemDesc.tabIndex = 0
    itemDesc.textContent = value

    itemCard.appendChild(itemName)
    itemCard.appendChild(itemDesc)
  }

  for (const [key, value] of Object.entries(pastries)) {
    console.log(`${key}: ${value}`);

    const itemCard = document.createElement('div')
    itemCard.classList = "m-4 p-4 xl:w-1/3 border-4 border-sky-500"
    itemCard.tabIndex = 0
    content.appendChild(itemCard)
    
    const itemName = document.createElement('h2')
    itemName.classList = "text-xl text-sky-500 text-left"
    itemName.tabIndex = 0
    itemName.textContent = key

    const itemDesc = document.createElement('h3')
    itemDesc.classList = "text-md text-sky-500"
    itemDesc.textContent = value

    itemCard.appendChild(itemName)
    itemCard.appendChild(itemDesc)
  }
}

export { menu }