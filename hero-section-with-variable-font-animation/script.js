const openMenu = document.querySelector('#open-menu-btn');
const menu = document.querySelector('.menu');

openMenu.addEventListener('click', () => {
  if (!document.startViewTransition) menu.classList.toggle('open');
  else document.startViewTransition(() => menu.classList.toggle('open'));
});
