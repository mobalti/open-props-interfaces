const storageKey = 'lang-preference';

const getLangPreference = () => {
  if (localStorage.getItem(storageKey)) return localStorage.getItem(storageKey);
  else return navigator.language.indexOf('ar') === 0 ? 'ar' : 'en';
};

const setPreference = () => {
  localStorage.setItem(storageKey, lang.value);
  reflectPreference();
};

const reflectPreference = () => {
  document.firstElementChild.setAttribute('lang', lang.value);

  document.firstElementChild.setAttribute(
    'dir',
    lang.value === 'ar' ? 'rtl' : 'ltr'
  );
};

const lang = {
  value: getLangPreference(),
};

// set early
// reflectPreference();

window.onload = () => {
  // set on load so screen readers can see latest value on the button
  reflectPreference();
};
