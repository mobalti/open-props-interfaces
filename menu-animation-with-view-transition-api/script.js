const openMenuBtn = document.querySelector('#open-menu-btn');
const closeMenuBtn = document.querySelector('#close-menu-btn');
const menu = document.querySelector('#menu');

function openMenu() {
  menu.classList.add('open');
  document.body.style.overflowY = 'hidden';
  window.addEventListener('keyup', pressESC);
}

function closeMenu() {
  menu.classList.remove('open');
  document.body.style.overflowY = 'unset';
  window.removeEventListener('keyup', pressESC);
}

openMenuBtn.addEventListener('click', () => {
  handleViewTransition(openMenu);
});

closeMenuBtn.addEventListener('click', () => {
  handleViewTransition(closeMenu);
});

function handleViewTransition(callback) {
  if (!document.startViewTransition) callback();
  else document.startViewTransition(() => callback());
}

// Close Menu by Press Escape(ESC)
function pressESC(e) {
  if (e.key == 'Escape') {
    handleViewTransition(closeMenu);
  }
}
