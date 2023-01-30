const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const list = document.querySelector('#ingredients');

// Версия 1

const markup = ingredients
  .map((ingredient) => `<li class="item">${ingredient}</li>`)
  .join("");

list.innerHTML = markup;




// Версия 2

// for (const ingredient of ingredients) {
//   const itemIngredientsEl = document.createElement('li');
//   itemIngredientsEl.classList.add('item');
//   itemIngredientsEl.textContent = ingredient;
//   console.log(itemIngredientsEl);
//   list.append(itemIngredientsEl);
// }




// Версия 3

// const addLiToIngredients = ingredients => {
//   return ingredients.map(ingredient => {

//     const li = document.createElement('li');
//     li.classList.add('item');
//     li.textContent = ingredient;

//     return li;
//   });
// };

// const elements = addLiToIngredients(ingredients);
// list.append(...elements);