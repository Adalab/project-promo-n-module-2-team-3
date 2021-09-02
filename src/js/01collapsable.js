'use strict'; //acordarnos de borrar
//Variables
const collapsableContent = document.querySelectorAll('.js_collapsable_content');
const collapsableTitle = document.querySelectorAll('.js_collapsable_title');
console.log(collapsableContent);
console.log(collapsableTitle);

//Handler
function collapsable() {
  for(let collapsableEl of collapsableContent){
    collapsableEl.classList.toggle('hidden');
  }
}
function handleCollapsable(ev){
  collapsable();
  console.log(event.currentTarget);
}

for(let titleEl of collapsableTitle) {
  titleEl.addEventListener('click', handleCollapsable);
}

