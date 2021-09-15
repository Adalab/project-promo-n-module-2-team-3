'use strict';

function getPaletteInfo() {
  let checkedPalette= '';
  const superChecked= document.querySelector('.js_radio:checked');
  const paletteFound = radioAll.findIndex((pal)=>{
    pal.checked === superChecked;
  });
  
  if( paletteFound !== -1){
     checkPalette = parseInt(
      document.querySelector('.js_radio:checked').value
    ); 
  }else{
    checkedPalette = 0;
  } 
  return checkedPalette;
}

function getUserData() {
  return {
    photo: photo,
    palette: getPaletteInfo(),
    name: document.querySelector('.js_name').value,
    job: document.querySelector('.js_job').value,
    email: document.querySelector('.js_email').value,
    phone: document.querySelector('.js_phone').value,
    linkedin: document.querySelector('.js_linkedin').value,
    github: document.querySelector('.js_github').value,
  };
}

function saveInLocalStorage() {
  const userData = getUserData();
  const userDataInString = JSON.stringify(userData);
  localStorage.setItem('userData', userDataInString);
}

function getFromLocalStorage() {
  const userDataInString = localStorage.getItem('userData');
  if (userDataInString !== null) {
    const userData = JSON.parse(userDataInString);
    document.querySelector('.js_name').value = userData.name;
    document.querySelector('.js_job').value = userData.job;
    document.querySelector('.js_email').value = userData.email;
    document.querySelector('.js_phone').value = userData.phone;
    document.querySelector('.js_linkedin').value = userData.linkedin;
    document.querySelector('.js_github').value = userData.github;
    photo = userData.photo;
    const paletteElements = document.querySelectorAll('.js_palettes');
    for (const paletteElement of paletteElements) {
      if (paletteElement.value === userData.palette) {
        paletteElement.checked = true;
      }
    }

    updateAllInputs();

    handlerPalette();

    updatePhoto();
  }
}
