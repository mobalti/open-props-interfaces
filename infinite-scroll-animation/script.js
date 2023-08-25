const openMenuBtn = document.querySelector('#open-menu-btn');
const closeMenuBtn = document.querySelector('#close-menu-btn');
const menu = document.querySelector('#menu');

function openMenu() {
  menu.classList.add('open');
  window.addEventListener('keyup', pressESC);
}

function closeMenu() {
  menu.classList.remove('open');
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
