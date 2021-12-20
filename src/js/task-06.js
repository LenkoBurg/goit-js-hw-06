const inputChange = document.querySelector('#validation-input');

inputChange.addEventListener('blur', e => {
    inputChange.classList.remove('valid', 'invalid')
    const dataLength = inputChange.getAttribute('data-length')
    
    if (e.currentTarget.value.length === Number(dataLength)) {
        inputChange.classList.add('valid')
    } else {
        inputChange.classList.add('invalid')
    }
});

