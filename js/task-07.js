const refs = {
    inputEl: document.querySelector('#font-size-control'),
    spanEl: document.querySelector('#text'),
};

refs.inputEl.addEventListener('input', onInputSpan);

function onInputSpan() {
    refs.spanEl.style.fontSize = refs.inputEl.value + `px`;
};