const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listIngredientsEl = document.querySelector('#ingredients');

for (const ingredient of ingredients) {
  const itemIngredientsEl = document.createElement('li');
  itemIngredientsEl.classList.add('item');
  itemIngredientsEl.textContent = ingredient;
  listIngredientsEl.appendChild(itemIngredientsEl);
}