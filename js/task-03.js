const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
// console.log(document);

// const imagesUl = document.querySelector('ul#ingredients');
const imagesUl = document.querySelector('ul');
// console.log(imagesUl);

const image = images.map(({url, alt}) => `<li class ="img"> <img src=${url} alt="${alt}" width="250"/></>`).join("");
imagesUl.insertAdjacentHTML("beforeend", image);
imagesUl.style.display = 'flex';
imagesUl.style.justifyContent = 'space-between';

// const listWithId = document.querySelector('#menu');
// listWithId.style.textTransform = 'uppercase';
// listWithId.style.fontSize = '24px';
// console.log(listWithId);


// console.log(document);
// images.forEach(img => {
//   const liItem = document.createElement('li');
//   // liItem.textContent = img.alt;
//   // liItem.className = "item";
//   imagesUl.append(liItem)
//   }
// )
// /* <img
//   src="https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg"
//   alt="Macbook Air na szarym drewnianym stole"
//   width="400"
// /> *
// const markup = newTechnologies
//   .map((technology) => `<li class="list-item new">${technology}</li>`)
//   .join("");

// list.insertAdjacentHTML("beforeend", markup);
// list.insertAdjacentHTML("beforebegin", "<h2>Popular technologies</h2>");