

const firstName = document.querySelector('#firstNameInput');
const lastName = document.querySelector('#lastNameInput');
const tel = document.querySelector('#telInput');
const email = document.querySelector('#emailInput');

const firstNameError = document.querySelector('#firstNameError');
const lastNameError = document.querySelector('#lastNameError');
const telError = document.querySelector('#telError');
const emailError = document.querySelector('#emailError');

const button = document.querySelector('#submit');

button.addEventListener('click', (event)=>{
    event.preventDefault();
    validateEmpty(firstName.value, firstName, firstNameError);
});

function validateEmpty(valueInput, divInput, divError){
    if(valueInput.length == 0){
         showError(divInput, divError);
    }else{
        hideError(divInput, divError);
    }
}

function showError(divInput, divError){
     divInput.style.border = '1px solid red';
     divError.innerHTML = `<img class="icon-error" src="./Imagenes/icon-error.svg" alt="">
     <p class="error">Introduce un nombre valido</p>`;
}

function hideError(divInput){
    divInput.style.border = '1px solid #1e9ba3';
}


