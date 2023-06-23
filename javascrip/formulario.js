const form = document.getElementById('user-form');
const submitButton = document.getElementById('submit-btn');

let timeout = null;

document.querySelectorAll('.form-box').forEach((box) =>{
    const boxInput = box.querySelector('input');

    boxInput.addEventListener('keydown', (event) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            console.log(`input ${boxInput.name} value:`, boxInput.value);

            validation(box, boxInput)
        }, 300);
        
    });
});

validation = (box, boxInput) => {
    if(boxInput.name == 'nickName') {
        console.log('validacion para nombre');
        if (boxInput.value == '') {
            showError(true, box);
        }else{
           showError(false, box);  
        }
    }
};

showError = (check, box)=> {
    if(check) {
        box.classList.remove('form-success');
        box.classList.add('form-error');
    }else{
        box.classList.remove('form-error');
        box.classList.add('form-success');  
    }
};
