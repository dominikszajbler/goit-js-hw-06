const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const gallery = document.querySelector("ul.gallery");
// console.log(gallery);
// Użyj tablicy obiektów images w celu utworzenia elementów <img> umieszczonych w <li>.
const imagesList = images
  .map((image) => (
    `<li class = task3__list>
      <img class = "task3__image" src="${image.url}" alt="${image.alt}" />
    </li>`
  ))
  .join("");
gallery.insertAdjacentHTML("afterbegin", imagesList);
// Napisz skrypt do tworzenia galerii obrazów według tablicy danych.
// W HTML znajduje się lista ul.gallery.

//  Aby utworzyć znacznik użyj łańcuchów szablonowych i metody insertAdjacentHTML().
// Wszystkie elementy galerii powinny być dodawane do DOM podczas jednej operacji.
// Ulepsz galerię używając flexboxów lub gridów poprzez klasy CSS.
