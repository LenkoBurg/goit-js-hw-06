const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listItems = ingredients.map(ingredient => {
  const listItem = document.createElement("li");
  listItem.classList.add("item");
  listItem.textContent = ingredient;
  return listItem;
});

const ulToInsert = document.querySelector('#ingredients');
ulToInsert.append(...listItems);

console.log(ulToInsert);