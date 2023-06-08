
let counterValue = 0;
const value = document.querySelector("#value");


const decrButton = document.querySelector('button[data-action="decrement"]')

const decrementClick = () => {
counterValue-=1

value.textContent = counterValue;
};

decrButton.addEventListener("click", decrementClick);

const incrButton = document.querySelector('button[data-action="increment"]')


const incrementClick = () => {
counterValue+=1;
value.textContent = counterValue;
};

incrButton.addEventListener("click", incrementClick);
