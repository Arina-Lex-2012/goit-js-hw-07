const getInputContentEl = document.getElementById('name-input');
const getOutputContentEl = document.getElementById('name-output');

getInputContentEl.addEventListener('input', onInputChange);


function onInputChange(event){
     getOutputContentEl.textContent = event.currentTarget.value;
     
     if (getOutputContentEl.textContent == ''){
        getOutputContentEl.textContent = 'незнакомец';
     };
};











