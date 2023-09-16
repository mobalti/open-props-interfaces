/*
  This script is specifically designed to dynamically generate pagination markers for the carousel.
  The actual animation logic is handled using the CSS version of the Scroll-driven-animation API.
*/
const images = document.querySelectorAll('#carousel img');
const pagination = document.querySelector('#pagination');

function createPaginationMarkers() {
  images.forEach((img) => {
    const imgViewName = `--${img.id}`;
    img.style.viewTimelineName = imgViewName;
    const marker = document.createElement('button');
    marker.type = 'button';
    marker.role = 'tab';
    marker.style.animationTimeline = imgViewName;
    marker.addEventListener('click', () => img.scrollIntoView());
    pagination.appendChild(marker);
  });

  document.body.style.timelineScope = `${Array.from(images).map(
    (image) => image.style.viewTimelineName
  )}`;
}

// Check browser support for the Scroll-driven-animation API
if (CSS.supports('view-timeline-axis', 'inline')) {
  createPaginationMarkers();
}

// Start scrolling from the second image
images[1].scrollIntoView();
