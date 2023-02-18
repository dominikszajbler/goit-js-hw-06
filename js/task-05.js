const inputValue = document.querySelector("input#name-input");

const outputValue = document.querySelector("span#name-output");

inputValue.addEventListener(
	"input",
	(event) => (outputValue.textContent = event.currentTarget.value),
);
