'use strict';
//Variables
const radioAll = document.querySelectorAll('.js_radio');
const paletteResult = document.querySelector('.js_palette_result');
let checkedPalette = 0;
//resultTextAll

function handlerPalette() {
  paletteResult.classList.remove('palette_0', 'palette_1', 'palette_2');
  const checkedPaletteElement = document.querySelector('.js_radio:checked');
  checkedPalette = checkedPaletteElement.value;
  paletteResult.classList.add('palette_' + checkedPalette);
  saveInLocalStorage();
}

//Listener
function listenerRadio() {
  for (const radio of radioAll) {
    radio.addEventListener('click', handlerPalette);
  }
}

listenerRadio();
