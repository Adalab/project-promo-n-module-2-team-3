'use strict';
const reset = document.querySelector('.js_reset');

function handleReset(event){
    event.preventDefault();
    // for (let i = 0; i < inputTextAll.length; i++) {
    //     if (inputTextAll[i].value !== '') {
    //       resultTextAll[i].innerHTML = inputTextAll.placeholder; 
    //     }
    //   } NO FUNCIONA
}

reset.addEventListener('click' , handleReset );