'use strict'; //acordarnos de borrar
//Variables
//En este caso las variables estarán formadas por arrays, por ello usaremos el querySelectorAll
const collapsableContent = document.querySelectorAll('.js_collapsable_content');
const collapsableTitle = document.querySelectorAll('.js_collapsable_title');
const arrowAll = document.querySelectorAll('.js_arrow');


//Handler
//Empezaremos crando la función del collapsable
function collapsable() {
  //Al haber usado arrays necesitaremos que un bucle ( en este calor for..of) nos recorra el arrays y así poder sacar los elementos de ella
  for(let collapsableEl of collapsableContent){
    //Ahora en cada uno de los elementos de estos elementos, le añadiremos/quitaremos la clase deseada
    collapsableEl.classList.toggle('hidden');
  }
}


function arrow(){
  for (let i = 0; i < arrowAll.length; i++) {
    const arrowEl = arrowAll[i];
  }

  for( const arrowEl of arrowAll ){

    arrowEl.classList.toggle('rotateArrow');

  }
}

function conditional(event){

  for (let i = 0; i < arrowAll.length; i++) {
    const titleEl = collapsableTitle[i];

  }
  if(collapsable[i].classList.contains('hidden') === true ){
    collapsable[i].classList.remove('hidden');
  }
}

//Esta es la función global la cual usaremos para realizar el evento
function handleCollapsable(event){

  collapsable();
  arrow();

  console.log(event.currentTarget); //Usaremos el event.currentTarget para verificar que todo funciona
}

//Volveremos a hacer otro bucle, pero en este caso sacaremos los elementos del titulo
for(let titleEl of collapsableTitle) {
  //En estos elementos realizaremos el evento deseado
  titleEl.addEventListener('click', handleCollapsable);
}

