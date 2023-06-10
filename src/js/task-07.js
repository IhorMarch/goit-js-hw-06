const form = document.querySelector("#font-size-control")
console.log(form);
const text = document.querySelector("#text")
console.log(text);


form.addEventListener("input", event => {
   text.style.fontSize = event.target.value + "px";
});
