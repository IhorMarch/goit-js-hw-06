function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const bodyEl = document.querySelector("body")
console.log(bodyEl);
const buttonEl = document.querySelector(".change-color")
console.log(buttonEl);
const colorEl = document.querySelector(".color")
console.log(colorEl);

const incrementClick = () => {
  const color = getRandomHexColor()
  bodyEl.style.backgroundColor =color ;
  colorEl.innerHTML=color;

};

buttonEl.addEventListener("click", incrementClick);



