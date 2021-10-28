'use strict';
const reset = document.querySelector('.js_reset');

function handleReset(event) {
  event.preventDefault();
  localStorage.removeItem('userData');
  location.reload();
}

reset.addEventListener('click', handleReset);
