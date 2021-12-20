const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const appendItem = (arr, ul, nameCreateEl, className) => {
  return arr.forEach(item => {
    const createElem = document.createElement(nameCreateEl)
    createElem.classList.add(className)
    createElem.textContent = item
    
    
    return ul.append(createElem) 
  })
};

appendItem(ingredients, document.querySelector('#ingredients'), 'li', 'item')