// For more info on Scroll Snap Events, check out this great article by Adam Argyle:
// https://developer.chrome.com/blog/scroll-snap-events

if ('onscrollsnapchange' in window) {
  let isAtEnd;
  let isAtStart;

  scroller.onscrollsnapchange = (event) => {
    // Remove 'snapped' class from the current element
    scroller.querySelector('.visual.snapped')?.classList.remove('snapped');

    // Add 'snapped' class to the new snap target
    event.snapTargetInline.classList.add('snapped');

    // Check if the first or last item is snapped
    isAtEnd = !!scroller.querySelector('.visual.snapped:last-child');
    isAtStart = !!scroller.querySelector('.visual.snapped:first-child');

    updateControls();
  };

  function updateControls() {
    // Update the disabled state of the controls (next/prev buttons)
    nextBtn.toggleAttribute('disabled', isAtEnd);
    prevBtn.toggleAttribute('disabled', isAtStart);
  }
} else {
  // Fallback for browsers without scroll snap change support
  // Set opacity to 100% for all visuals (no animation, but fully visible)

  scroller.style.setProperty('--visual-opacity', 1);

  // Todo: Disable the buttons (prev/next) when appropriate
  // Todo: Handle focus management manually in the fallback
}
