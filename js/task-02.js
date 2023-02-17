const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// console.log(document.querySelector('ul#ingredients'));
const ingredientsUl = document.querySelector('ul#ingredients');

// const liItem = document.createElement('li');
// liItem.textContent = "owoc";
// item.append(liItem)

ingredients.forEach(ingredient => {
  const liItem = document.createElement('li');
  liItem.textContent = ingredient;
  liItem.className = "item";
  ingredientsUl.append(liItem)
  }
)