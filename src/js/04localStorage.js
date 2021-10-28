'use strict';

function getUserData() {
  console.log(parseInt(document.querySelector('.js_palettes:checked').value));
  return {
    photo: photo,
    palette: parseInt(document.querySelector('.js_palettes:checked').value),
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
      if (parseInt(paletteElement.value) === userData.palette) {
        paletteElement.checked = true;
      }
    }

    // updateAllInputs();

    handlerPalette();

    updatePhoto();
  }
}
