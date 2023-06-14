const form = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");




const addUserName = (event) => {
userName.innerHTML=event.currentTarget.value
    if (event.currentTarget.value === "")
    userName.innerHTML='Anonimus'
};

form.addEventListener("input", addUserName);



