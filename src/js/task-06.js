const getInputContentEl = document.getElementById('validation-input');

getInputContentEl.style.borderColor = '#bdbdbd';
getInputContentEl.style.borderWidth = '3px';
getInputContentEl.style.borderStyle = 'solid';

getInputContentEl.addEventListener('input', onInputChange);

function onInputChange(event){ 
    if(event.currentTarget.value.length == 6){
        console.log('good');
      getInputContentEl.style.borderColor = '#4caf50';      
    } else {
        getInputContentEl.style.borderColor = '#f44336';
    };
};