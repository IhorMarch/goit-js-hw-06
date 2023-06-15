const form = document.querySelector("#font-size-control")
const text = document.querySelector("#text")

text.style.fontSize =form.value + "px";


form.addEventListener("input", event => {
   text.style.fontSize = event.target.value + "px";
});

function handleText(event) {

   text.style.fontSize =event.target.value + "px";
}

form.addEventListener("input",handleText);