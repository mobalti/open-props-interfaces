const props = [
  'Colors',
  'Gradients',
  'Shadows',
  'Aspect Ratios',
  'Typography',
  'Easing',
  'Animations',
  'Sizes',
  'Borders',
  'Z-Index',
  'Media Queries',
  'Masks',
  "Let's Get Started",
];

window.onload = () => {
  let delay = 1000;
  let timeout = delay;
  props.forEach((elem) => {
    setTimeout(() => setContent(elem), (timeout += delay));
  });
};

function setContent(text) {
  if (!document.startViewTransition) hero.innerHTML = `<h1>${text}</h1>`;
  else
    document.startViewTransition(() => (hero.innerHTML = `<h1>${text}</h1>`));
}
