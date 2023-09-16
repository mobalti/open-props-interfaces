const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('mousemove', (event) => {
    const rect = card.getBoundingClientRect();
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    const gradientX = (mouseX / card.offsetWidth) * 100 + '%';
    const gradientY = (mouseY / card.offsetHeight) * 100 + '%';

    card.style.setProperty('--gradient-center', `at ${gradientX} ${gradientY}`);
  });
});
