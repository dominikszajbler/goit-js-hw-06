const inputValue = document.querySelector("input#name-input");

const outputValue = document.querySelector("span#name-output");
const defaultText = outputValue.textContent;	
inputValue.addEventListener(
	"input",
	(event) => (event.currentTarget.value === "" ? outputValue.textContent =  defaultText :
		outputValue.textContent = event.currentTarget.value),
	
);
