const form = document.getElementById('user-form');
const submitButton = document.getElementById('submit-btn');

let timeout = null;

document.querySelectorAll('.form-box').forEach((box) =>{
    const boxInput = box.querySelector('input');

    boxInput.addEventListener('keydown', (Event) =>{
        clearTimeout(timeout);
        timeout = setTimeout(() =>{
            console.log(`input ${boxInput.name} value:`, boxInput.value);
        }, 300);
        
    });
});