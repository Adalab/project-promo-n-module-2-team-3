//Variables
const collapsableContent = document.querySelector('.js_collapsable_content');
const collapsableTitle = document.querySelector('.desing__title');
const collapsableContent2 = document.querySelector('.js_collapsable_content2');
const collapsableContent3 = document.querySelector('.js_collapsable_content3');

//Handler
function handleCollapsableTarget(event) {
  console.log('hey');
  collapsableContent.classList.toggle('hidden');
}

// if (event.currentTarget.) {
//     collapsableContent.classList.toggle('hidden');
//     }
// else if (collapsableContent2.classList.contains('hidden')) {
//         collapsableContent2.classList.toggle('hidden');
//     }
// else if (collapsableContent3.classList.contains('hidden')) {
//     collapsableContent3.classList.toggle('hidden');
// }

//Listener
collapsableTitle.addEventListener('click', handleCollapsableTarget);
