const welcome = document.querySelector('#welcome');
const openButton = document.querySelector('#openSurprise');
const main = document.querySelector('#mainContent');
const replay = document.querySelector('#replay');

openButton.addEventListener('click', () => {
  welcome.classList.add('opened');
  main.classList.add('visible');
  main.setAttribute('aria-hidden', 'false');
  document.body.classList.remove('locked');
  setTimeout(() => document.querySelector('.hero').scrollIntoView({ behavior: 'smooth' }), 350);
});

replay.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
