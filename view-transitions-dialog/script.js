const openSearchBtn = document.querySelector('#open-search');
const searchDialog = document.querySelector('#dialog');
const closeSearchBtn = document.querySelector('#close');

const openDialog = () => {
  if (!document.startViewTransition) searchDialog.showModal();
  else document.startViewTransition(() => searchDialog.showModal());
  window.addEventListener('click', handleClickOutside);
};

const closeDialog = (e) => {
  //   e.preventDefault()

  if (!document.startViewTransition) searchDialog.close();
  else document.startViewTransition(() => searchDialog.close());
  window.removeEventListener('click', handleClickOutside);
};

const handleClickOutside = ({ target: dialog }) => {
  if (dialog.nodeName === 'DIALOG') closeDialog();
};

openSearchBtn.addEventListener('click', openDialog);
closeSearchBtn.addEventListener('click', closeDialog);
