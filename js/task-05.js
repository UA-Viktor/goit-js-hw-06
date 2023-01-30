const refs = {
    inputData: document.querySelector('#name-input'),
    outData: document.querySelector('#name-output'),
}

refs.inputData.addEventListener('input', onInputChange);
refs.inputData.addEventListener('blur', onInputBlur);


function onInputChange(event) {
  refs.outData.textContent = event.currentTarget.value;
}

function onInputBlur(event) {
  if (refs.inputData.value === '') {
    refs.outData.textContent = 'Anonymous';
  };
};