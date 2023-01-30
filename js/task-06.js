const inputData = document.querySelector('input');
const inputDataLength =  Number(inputData.getAttribute('data-length'));

inputData.addEventListener('blur', onInputBlur);

function onInputBlur() {
    inputData.classList.remove('valid', 'invalid');

    inputData.value.length !== inputDataLength
        ? inputData.classList.add('invalid')
        : inputData.classList.add('valid');
};