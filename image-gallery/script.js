const dialog = document.querySelector('#dialog');
const images = document.querySelectorAll('.imageGallery button');
const closeDialogBtn = document.querySelector('#closeDialogBtn');

function openDialog(index) {
  if (!document.startViewTransition) {
    dialog.showModal();
    document.querySelectorAll('#carousel img')[index].scrollIntoView();
  } else handleTransition(index);
}

// Wait until the transition finished and the dialog opens before scrolling into view.
async function handleTransition(index) {
  const transition = document.startViewTransition(() => dialog.showModal());
  try {
    await transition.finished;
  } finally {
    document.querySelectorAll('#carousel img')[index].scrollIntoView();
  }
}

const closeDialog = () => {
  if (!document.startViewTransition) dialog.close();
  else document.startViewTransition(() => dialog.close());
};

images.forEach((img, index) => {
  console.log(index);
  img.addEventListener('click', () => openDialog(index));
});

closeDialogBtn.addEventListener('click', () => closeDialog());
