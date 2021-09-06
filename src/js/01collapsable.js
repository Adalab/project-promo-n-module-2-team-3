'use strict'; //acordarnos de borrar
//Variables
//En este caso las variables estarán formadas por arrays, por ello usaremos el querySelectorAll
const collapsableContent = document.querySelectorAll('.js_collapsable_content');
const collapsableTitle = document.querySelectorAll('.js_collapsable_title');
const arrowAll = document.querySelectorAll('.js_arrow');

//Handler
//Empezaremos crando la función del collapsable

function arrow() {
  for (let i = 0; i < arrowAll.length; i++) {
    const arrowEl = arrowAll[i];
  }

  for (const arrowEl of arrowAll) {
    arrowEl.classList.toggle('rotateArrow');
  }
}

//Esta es la función global la cual usaremos para realizar el evento
function handleCollapsable(event) {
  debugger;
  //Al haber usado arrays necesitaremos que un bucle ( en este calor for..of) nos recorra el arrays y así poder sacar los elementos de ella
  const titleEl = event.currentTarget;
  console.log(titleEl);
  //faltará enlazar los arrays de titulos con los arrays de contenido --------------------------------
  for (let i = 0; i < collapsableContent.length; i++) {
    let collapsableContentEl = collapsableContent[i];
    console.log(collapsableContentEl);
    if (titleEl.classList.contains('clicado') === true) {
      collapsableContentEl.classList.toggle('hidden');
    } else {
      collapsableContentEl.classList.add('hidden');
    }
  }
  arrow();

  console.log(event.currentTarget); //Usaremos el event.currentTarget para verificar que todo funciona
}

//Volveremos a hacer otro bucle, pero en este caso sacaremos los elementos del titulo
for (let titleEl of collapsableTitle) {
  //En estos elementos realizaremos el evento deseado
  titleEl.addEventListener('click', handleCollapsable);
}
