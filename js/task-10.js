function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxContainer = document.querySelector('#boxes');

createBtn.addEventListener('click', createBoxes);
destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(event) {
  for (let index = 0; index < inputEl.value; index += 1) {

    const div = document.createElement('div');
    div.style.width = `${30 + index * 10}px`;
    div.style.height = `${30 + index * 10}px`;
    div.style.backgroundColor = getRandomHexColor();

    boxContainer.append(div);
  };
};

function destroyBoxes(event) {
  boxContainer.remove('div');
};