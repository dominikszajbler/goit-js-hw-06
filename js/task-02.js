const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const Ul = document.querySelector("#ingredients");

const AddIngredients = ingredients.forEach((ingredient) =>
{const ingredientList = document.createElement("li"); // Utworzy oddzielny element <li>. Koniecznie użyj metody document.createElement().
ingredientList.textContent = ingredient; // Doda nazwę elementu jako jego zawartość tekstową.
ingredientList.classList.add("item"); // Doda do elementu klasę item.
Ul.append(ingredientList);// Po czym umieści wszystkie <li> na liście podczas jednej operacji ul#ingredients.
});
console.log(Ul);