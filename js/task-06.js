
const form = document.querySelector("#validation-input");
console.log(form.dataset.length);

form.addEventListener("blur", event => {
    
    
    if (event.target.value.length === Number(form.dataset.length)) {
         form.classList.remove('invalid');
         form.classList.add('valid');
    
    }
   
    else {
        form.classList.remove('valid');
        form.classList.add('invalid');
         
  }
		
		
});
