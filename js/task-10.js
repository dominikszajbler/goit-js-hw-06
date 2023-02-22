function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const qs = (selector) => document.querySelector(selector);

const boxes = qs('#boxes');
const creator = qs('button[data-create]');
const destoyer = qs('button[data-destroy]');
const number = qs('#controls input');

const createBoxes = (amount) => {
  let boxesArr = [];
  for (let i =1; i <=amount; i++){
    const box = document.createElement('div');
    box.style.height = `${(20 + i * 10)}px`;
    box.style.width = `${(20 + i * 10)}px`;
		box.style.borderColor = "black";
		box.style.borderStyle = "solid";
		box.style.borderWidth = "1px";
		box.style.margin = "10px";
		box.style.background = getRandomHexColor();
		boxesArr = [...boxesArr, box];
  }
  boxes.append(...boxesArr);
};

creator.addEventListener('click', e => createBoxes(number.value));
destoyer.addEventListener('click', e => boxes.innerHTML = '');