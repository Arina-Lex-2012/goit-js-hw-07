const getInputEl = document.getElementById('font-size-control');
const getOutputEl = document.getElementById('text');

getInputEl.addEventListener('input', onInputChange);

function onInputChange(){ 
    getOutputEl.style.fontSize = `${getInputEl.value}px`;
};

