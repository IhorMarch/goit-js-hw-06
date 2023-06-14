
const form = document.querySelector("input");


form.addEventListener("blur", event => {
   
    if (event.currentTarget.value.length > form.dataset.length) {
        
        form.classList.add("invalid")
    }
    form.classList.add("valid")

});

