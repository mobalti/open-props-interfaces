const NORMAL_PLAYBACK_RATE = 1;
const REDUCED_PLAYBACK_RATE = 0.2;

let rate = NORMAL_PLAYBACK_RATE;

const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
if (mediaQuery.matches) rate = REDUCED_PLAYBACK_RATE;

mediaQuery.addEventListener(
  'change',
  () =>
    (rate = mediaQuery.matches ? REDUCED_PLAYBACK_RATE : NORMAL_PLAYBACK_RATE)
);

const words = document.querySelectorAll('.props li');

function animateWord(index) {
  if (index < words.length) {
    const animation = words[index].animate(
      [
        { opacity: 0 },
        { opacity: 1, offset: 0.25 }, // Adjust the flickering as needed from here
        { opacity: 1, offset: 0.85 },
        { opacity: 0 },
      ],
      {
        duration: 200,
        fill: 'forwards',
      }
    );

    animation.playbackRate = rate;
    animation.onfinish = () => {
      animateWord(index + 1);
    };
  } else {
    animateWord(0);
  }
}

animateWord(0);
