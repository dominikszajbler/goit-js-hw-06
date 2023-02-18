const inputValue = document.querySelector("input#validation-input");
const attributeValue = inputValue.getAttribute("data-length");

const validInput = () => {
	inputValue.classList.add("valid");
	inputValue.classList.remove("invalid");
};
const invalidInput = () => {
	inputValue.classList.add("invalid");
	inputValue.classList.remove("valid");
};

inputValue.addEventListener("blur", () =>
	attributeValue == inputValue.value.length ? validInput() : invalidInput());
