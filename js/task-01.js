const NumberCategories = document.querySelectorAll("#categories > li");

console.log(`Number of categories: ${NumberCategories.length} `);
// Policzy i wprowadzi do wiersza poleceń liczbę kategorii w ul#categories, czyli elementy li.item.

// Dla każdego elementu li.item na liście ul#categories, 
const CategoryAnalysis = NumberCategories.forEach((e) => {
   console.log(
    `Category: ${e.querySelector("h2").textContent}\nElements: ${
      e.querySelector("ul").childElementCount
    } `
    // znajdzie i wprowadzi do wiersza poleceń tekst nagłówka elementu (tag <h2>)
    //  i liczbę elementów w kategorii (wszystkich <li>).
  );
});



