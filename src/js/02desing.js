'use strict';
//Variables
const radioAll = document.querySelectorAll('.js_radio');
const paletteResult = document.querySelector('.js_palette_result');
let checkedPalette = 0;
//resultTextAll

//Funciones
// function paintPalettes(clickedEl) {
//   if (clickedEl.value === 'blue_scale') {
//     palettes.classList.remove('palette_1');
//     palettes.classList.remove('palette_2');
//     palettes.classList.add('palette_0');
//   } else if (clickedEl.value === 'red_scale') {
//     palettes.classList.remove('palette_0');
//     palettes.classList.remove('palette_2');
//     palettes.classList.add('palette_1');
//   } else if (clickedEl.value === 'mix_scale') {
//     palettes.classList.remove('palette_0');
//     palettes.classList.remove('palette_1');
//     palettes.classList.add('palette_2');
//   }
// }
function handlerPalette() {
  //const clickedEl = ev.currentTarget;
  //paintPalettes(clickedEl);
  //suyo---
  paletteResult.classList.remove('palette_0', 'palette_1', 'palette_2');
  const checkedPaletteElement = document.querySelector('.js_palettes:checked');
  checkedPalette = checkedPaletteElement.value;
  paletteResult.classList.add('palette_' + checkedPalette);
  // eslint-disable-next-line no-undef
  saveInLocalStorage();
}

//Listener
function listenerRadio() {
  for (const radio of radioAll) {
    radio.addEventListener('click', handlerPalette);
  }
}

//Llamadas a funciones
listenerRadio();
