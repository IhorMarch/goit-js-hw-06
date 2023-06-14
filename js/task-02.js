const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ulList = document.querySelector('#ingredients')

const liArr = [];
ingredients.forEach(function (ingredient) {
  const item = document.createElement('li');
  item.className = 'item';
  item.textContent = ingredient;
  liArr.push(item)

})

ulList.append(...liArr)
