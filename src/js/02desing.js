'use strict';
//Variables
const radioAll = document.querySelectorAll('.js_radio');
const paletteResult = document.querySelector('.js_palette_result');
let checkedPalette = 0;
//resultTextAll

function handlerPalette() {
  const paletteNumber = parseInt(
    document.querySelector('.js_palettes:checked').value
  );
  //const clickedEl = ev.currentTarget;
  //paintPalettes(clickedEl);
  //suyo---
  paletteResult.classList.remove('palette_0', 'palette_1', 'palette_2');
  //const checkedPaletteElement = document.querySelector('.js_palettes:checked');
  //checkedPalette = checkedPaletteElement.value;
  //getPaletteInfo();
  paletteResult.classList.add('palette_' + paletteNumber);
  // eslint-disable-next-line no-undef
  saveInLocalStorage();
}

//Listener
function listenerRadio() {
  for (const radio of radioAll) {
    radio.addEventListener('click', handlerPalette);
  }
}

listenerRadio();
