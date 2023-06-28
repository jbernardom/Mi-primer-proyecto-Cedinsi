

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
    validateEmpty(firstName.value, firstName, firstNameError, 'Nombre no puede estar vacio');
    validateEmpty(lastName.value, lastName, lastNameError, 'Apellido no puede estar vacio');
    validateEmpty(tel.value, tel, telError, 'Telefono no puede estar vacio');
    validateEmail(email.value, email, emailError, 'Email');
    
});

function validateEmail(valueInput, divInput, divError, nameInput){
    let regExp = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
    
    if (regExp.test(valueInput) == true){
        hideError(divInput, divError)      
    }else{
        showError(divInput, divError, 'Por favor introduce un correo valido')
    }
}

function validateEmpty(valueInput, divInput, divError, nameInput){
    if(valueInput.length == 0){
         showError(divInput, divError, nameInput);
    }else{
        hideError(divInput, divError);
    }
}

function showError(divInput, divError, error){
     divInput.style.border = '1px solid red';
     divError.innerHTML = `<img class="icon-error" src="./Imagenes/icon-error.svg" alt="">
     <p class="error">${error}</p>`;
}

function hideError(divInput, divError){
    divInput.style.border = '1px solid #1e9ba3';
    divError.innerHTML = ``;
}


