const refs = {
    inputData: document.querySelector('#name-input'),
    outData: document.querySelector('#name-output'),
}

refs.inputData.addEventListener('input', onInputChange)

function onInputChange(event) {
  refs.outData.textContent = event.currentTarget.value;
}