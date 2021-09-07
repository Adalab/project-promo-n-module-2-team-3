'use strict'; //acordarnos de borrar
//Variables
//En este caso las variables estarán formadas por arrays, por ello usaremos el querySelectorAll
const collapsableContentAll = document.querySelectorAll(
  '.js_collapsable_content'
);
const collapsableTitleList = document.querySelectorAll('.js_collapsable_title');
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
  //Al haber usado arrays necesitaremos que un bucle ( en este calor for..of) nos recorra el arrays y así poder sacar los elementos de ella
  debugger;
  const titleEl = event.currentTarget;
  console.log(titleEl);
  titleEl.classList.add('clicado');
  //ustedes tenian la lógica que el titulo al ser clicado se le añadiera una clase, lo deje asi
  //en la siguiente variable seleccione todos los titulos para saber cual es el nuevo que tiene la clace "clicado"

  //faltará enlazar los arrays de titulos con los arrays de contenido --------------------------------
  for (let i = 0; i < collapsableContentAll.length; i++) {
    let collapsableContentEl = collapsableContentAll[i];
    //aqui debemos preguntar si el titulo esta clicado, pero los titulos al ser una lista se debe acceder
    //a cada posicion con [i]
    if (collapsableTitleList[i].classList.contains('clicado') === true) {
      collapsableContentEl.classList.toggle('hidden');
      //debemos borrarle la clase clicado porque cada iteraccion que haga el usuario solo debe haber un clicado
      collapsableTitleList[i].classList.remove('clicado');
    } else {
      //aqui tambien debemos quitar la clase clicado, porque solo puede haber uno a la vez
      collapsableTitleList[i].classList.remove('clicado');
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
