const buttons = document.querySelectorAll('section button');
let initial = document.querySelectorAll('button img').length / 2;
let count = initial;

buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    if (count > 1) {
      document
        .querySelectorAll(`button img:nth-child(${count})`)
        .forEach((img) => {
          img.classList.add('fade-out');
        });

      count--;
    }

    // For demo purposes (looping images)
    else {
      count = initial;
      document.querySelectorAll(`button img`).forEach((img) => {
        img.classList.remove('fade-out');
      });
    }
  });
});
