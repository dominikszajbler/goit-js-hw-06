
let counterValue = 0

const displayCounter = document.querySelector("#value");

const decrement = document.querySelector('button[data-action="decrement"]');

const subtractClick = (event) => {
	return (counterValue = counterValue - 1), displayCounter.textContent = counterValue;
};
decrement.addEventListener("click", subtractClick);

const increment = document.querySelector('button[data-action="increment"]');

const addClick = (event) => {
	return (counterValue = counterValue + 1), displayCounter.textContent = counterValue;
};
increment.addEventListener("click", addClick);

// element.append(el1
// text.remove();
// const message = document.querySelector("#message");
// console.log(message.value); // Default textarea message
// const singleBtn = document.querySelector("#single");

// const handleClick = () => {
//   console.log("click event listener callback");
// };

// singleBtn.addEventListener("click", handleClick);

//
