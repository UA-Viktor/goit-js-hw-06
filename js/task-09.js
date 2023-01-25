function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.querySelector('body')
const changeColorBtn = document.querySelector('.change-color');

changeColorBtn.addEventListener('click', event => {
  bodyEl.style.backgroundColor = getRandomHexColor();
});