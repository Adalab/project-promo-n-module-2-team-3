'use strict';

function preventSubmit(event) {
  event.preventDefault();
}
formElement.addEventListener('submit', preventSubmit);

getFromLocalStorage();
updateAllInputs();
handlerPalette();
updatePhoto();
listenerRadio();