const audio = document.querySelector('#audioPlayer');
const playPauseBtn = document.querySelector('#playPauseBtn');
const playIcon = document.querySelector('#playIcon');
const pauseIcon = document.querySelector('#pauseIcon');

function createEffectOverlay() {
  const mainImage = document.querySelector('.visual-wrapper .img');

  if (!mainImage) {
    console.error('Main image not found in .visual-wrapper');
    return;
  }

  const mainSrc = mainImage.getAttribute('src');
  const mainAlt = mainImage.getAttribute('alt') || '';
  const mainWidth = mainImage.getAttribute('width') || '';
  const mainHeight = mainImage.getAttribute('height') || '';

  // Create the effect overlay container
  const overlayDiv = document.createElement('div');
  overlayDiv.classList.add('effect-overlay');

  const effectImage = document.createElement('img');
  effectImage.setAttribute('aria-hidden', 'true');
  effectImage.classList.add('img', 'effect-image');
  effectImage.setAttribute('src', mainSrc);
  effectImage.setAttribute('alt', mainAlt);
  effectImage.setAttribute('width', mainWidth);
  effectImage.setAttribute('height', mainHeight);
  effectImage.id = 'overlayImage';

  overlayDiv.appendChild(effectImage);
  const visualWrapper = document.querySelector('.visual-wrapper');
  visualWrapper.appendChild(overlayDiv);
}

createEffectOverlay();

// Re-select the dynamically created #overlayImage
const image = document.querySelector('#overlayImage');

// Setup audio context and analyser
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const audioSource = audioContext.createMediaElementSource(audio);

const analyser = audioContext.createAnalyser();
audioSource.connect(analyser);
analyser.connect(audioContext.destination);

analyser.fftSize = 256;
const bufferLength = analyser.frequencyBinCount;
const dataArray = new Uint8Array(bufferLength);

// Set initial audio volume
audio.volume = 0.5;

function togglePlayPauseIcons(isPlaying) {
  playIcon.style.display = isPlaying ? 'none' : 'inline';
  pauseIcon.style.display = isPlaying ? 'inline' : 'none';
  playPauseBtn.setAttribute('aria-label', isPlaying ? 'Pause' : 'Play');
  playPauseBtn.setAttribute('title', isPlaying ? 'Pause' : 'Play');
}

function updateVisualization() {
  analyser.getByteFrequencyData(dataArray);
  const average = dataArray.reduce((acc, val) => acc + val, 0) / bufferLength;
  const opacity = ((average - 0) / (255 - 0)) * (1 - 0) + 0;

  if (image) {
    image.style.opacity = opacity;
  }

  requestAnimationFrame(updateVisualization);
}

playPauseBtn.addEventListener('click', () => {
  if (audio.paused) {
    audio.play();
    togglePlayPauseIcons(true);
    audioContext.resume().then(updateVisualization);
  } else {
    audio.pause();
    togglePlayPauseIcons(false);
    cancelAnimationFrame(updateVisualization);
  }
});

// Reset play/pause state when audio ends
audio.addEventListener('ended', () => {
  togglePlayPauseIcons(false);
  cancelAnimationFrame(updateVisualization);
});
