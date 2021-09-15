'use strict';
const twitterElement = document.querySelector('.js_twitter_btn');
const twitterLinkElement = document.querySelector('.js_twitter_link');
function handleTwitterShare() {
  twitterLinkElement.href = `https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&url=${shareLink}`;
}
twitterElement.addEventListener('click', handleTwitterShare);