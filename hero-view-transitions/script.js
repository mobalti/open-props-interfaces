const content = [
  'Supercharged CSS variables',
  'Expertly crafted web design tokens',
  'Create consistent components',
  'Useful in any framework',
];

window.onload = () => {
  let timeout = 1000;
  content.forEach((elem) => {
    setTimeout(() => setContent(elem), (timeout += 2000));
  });
};

function setContent(text) {
  if (!document.startViewTransition) hero.innerHTML = `<p>${text}</p>`;
  else document.startViewTransition(() => (hero.innerHTML = `<p>${text}</p>`));
}
