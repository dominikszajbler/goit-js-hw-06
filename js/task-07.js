const input = document.getElementById("font-size-control");
const fontSize = document.getElementById("text");

// console.log(document.body);
// console.log(input.value);
// console.log(fontSize)
input.addEventListener("input", (event) => {
    event.preventDefault();
    fontSize.style.fontSize = `${input.value}px`;
    // console.log(input.value);
});