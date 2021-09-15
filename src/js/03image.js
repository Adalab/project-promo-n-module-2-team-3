'use strict';

//---------------------------------------------------------------Imagen interactive
let photo = '';

const fr = new FileReader();
const fileField = document.querySelector('.js__profile-upload-btn');
const profileImage = document.querySelector('.js__profile-image');
const profilePreview = document.querySelector('.js__profile-preview');

//Recoge el archivo añadido al campo de tipo 'file' y lo carga en nuestro objeto FileReader para que lo convierta a algo con lo que podamos trabajar. Añade un listener al FR para que ejecute una función al tener los datos listos @param {evento} e

function getImage(e) {
  const myFile = e.currentTarget.files[0];
  fr.addEventListener('load', writeImage);
  fr.readAsDataURL(myFile);
}

/**
 * Una vez tenemos los datos listos en el FR podemos
 * trabajar con ellos ;)
 */
function writeImage() {
  photo = fr.result;
  updatePhoto();

  // eslint-disable-next-line no-undef
  saveInLocalStorage();
}

function updatePhoto() {
  const currentPhoto = photo;
  if (currentPhoto !== '') {
    profilePreview.style.backgroundImage = `url(${currentPhoto})`;
    profileImage.style.backgroundImage = `url(${currentPhoto})`;
  }
  saveInLocalStorage();
}

function clearPhoto() {
  photo = '';
  profilePreview.style.backgroundImage = '';
  profileImage.style.backgroundImage = '';
}

// /**
//  * Genera un click automático en nuesto campo de tipo 'file'
//  * que está oculto
//  */
// function fakeFileClick() {
//   fileField.click();
// }

/**
 * Añadimos los listeners necesarios:
 * - al botón visible para generar el click automático
 * - al campo oculto para cuando cambie su value
 */
fileField.addEventListener('change', getImage);
