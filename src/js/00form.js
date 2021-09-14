'use strict';
//variable
const formElement = document.querySelector('.js_form');
const inputTextAll = document.querySelectorAll('.js_text_type');
const resultTextAll = document.querySelectorAll('.js_text_result');
const inputLinkAll = document.querySelectorAll('.js_link_type');
const resultLinkAll = document.querySelectorAll('.js_link_result');

//handle
function text() {
  for (let i = 0; i < inputTextAll.length; i++) {
    if (inputTextAll[i].value !== '') {
      resultTextAll[i].innerHTML = inputTextAll[i].value;
    } else if (inputTextAll[i].name === 'fullName') {
      resultTextAll[i].innerHTML = 'Nombre Apellido';
    } else if (inputTextAll[i].name === 'job') {
      resultTextAll[i].innerHTML = 'Front-End Developer';
    }
  }
}

function link() {
  resultLinkAll[0].href = 'tel: ' + inputLinkAll[1].value;
  resultLinkAll[1].href = 'mailto:' + inputLinkAll[0].value;
  resultLinkAll[2].href = 'https://' + inputLinkAll[2].value;
  resultLinkAll[3].href = 'https://github.com/' + inputLinkAll[3].value;
}

function updateAllInputs() {
  text();
  link();
}

//Listener
formElement.addEventListener('keyup', updateAllInputs);
