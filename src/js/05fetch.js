'use strict';
const buttonShare = document.querySelector('.js_button_create');
const cardResult = document.querySelector('.js_shareclick');
const hiddenElement = document.querySelector('.js_hidden_box');
const twitterHiddenElement = document.querySelector('.js_twitter_share');
let shareLink = '';
const userData = {
  palettes: '',
  name: '',
  job: '',
  photo: '',
  email: '',
  phone: '',
  linkedin: '',
  github: '',
};

function handlerCreateCard(e) {
  e.preventDefault();
  fetchAPI();
  buttonShare.classList.remove('share--button');
  buttonShare.classList.add('share--button__dis');
  buttonShare.disabled = true;
  twitterHiddenElement.classList.remove('hidden');
}

function fetchAPI() {
  const url = '//profileawesome.herokuapp.com/card';
  const data = getUserData();
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((data) => {
      debugger;
      const linkElement = document.querySelector('.js-card-link');
      if (data.success === true) {
        data.cardURL;
        shareLink = data.cardURL;
        linkElement.innerHTML = `<a href="${shareLink}" class="shareclick__text js-shareclick" target="_blank">Pincha aqui para ver tu tarjeta AWESOME.</a>`;
        twitterHiddenElement.classList.remove('hidden');
      } else {
        buttonShare.disabled = false;
        twitterHiddenElement.classList.add('hidden');
        hiddenElement.classList.remove('hidden');
      }
    });
}

buttonShare.addEventListener('click', handlerCreateCard);
