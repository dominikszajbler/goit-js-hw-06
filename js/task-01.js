// console.log(document.body)
// console.log(document.body.childNodes)
// console.log(document.body.children)
// console.log(document.querySelector('ul#categories').children.length)

// const cat = document.querySelector('ul#categories')
const itemArray = document.querySelectorAll(".item")
console.log(`Number of categories: ${itemArray.length}`)

// const itemArray = [...document.querySelectorAll(".item")]

itemArray.forEach( (item) => {
    console.log(`Category: ${item.firstElementChild.textContent}`);
    console.log(`Elements: ${item.querySelectorAll('li').length}`);
});



// const animalCat = itemArray[0];
// const productCat = itemArray[1];
// const technologyCat = itemArray[2];



// console.log(`Category: ${animalCat.firstElementChild.textContent}`);
// console.log(`Elements: ${animalCat.querySelectorAll('li').length}`);

// console.log([...itemArray])
// console.log(document.querySelectorAll(".item").childNodes)