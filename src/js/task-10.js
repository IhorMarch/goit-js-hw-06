function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputEl = document.querySelector('input')
const boxesEl = document.querySelector("#boxes")
const btnCreate = document.querySelector("button[data-create]")
const btnDestroy = document.querySelector("button[data-destroy]")

let boxWidth = 30;
let boxHeight= 30

const createBoxes =(amount) =>{
for (let i = 0; i <amount; i += 1) {
const boxEl = document.createElement('div');
boxEl.style.backgroundColor = getRandomHexColor();
boxEl.style.width = boxWidth + i*10 + "px";
  boxEl.style.height = boxHeight + i * 10 + "px";
   boxEl.classList.add("new-element")
boxesEl.append(boxEl);
}

}

btnCreate.addEventListener("click", () => {
  let amount = inputEl.value;
  if(amount > 0) {
    createBoxes(amount);
  }
});


const destroyBoxes =() => {
  boxesEl.innerHTML = '';

}

btnDestroy.addEventListener("click", destroyBoxes)





