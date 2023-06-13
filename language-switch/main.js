import './style.css';
import arabic from './src/ar.json';
import english from './src/en.json';

window.addEventListener('languagechange', (event) => {
  console.log('languagechange event detected!');
  lang.value = navigator.language.indexOf('ar') === 0 ? 'ar' : 'en';
  setPreference();
  generateContent();
});

function generateContent() {
  const isArabic = lang.value === 'ar';
  const data = isArabic ? arabic : english;

  document.querySelector('#app').innerHTML = `
<section>
<header>
  <h2 id="section-title"> ${data.sectionTitle}</h2>
  <button
    class="lang-toggle"
    id="lang-toggle"
    title="Toggles arabic & english"
    aria-label=${isArabic ? 'arabic' : 'english'}
    title="switch to arabic"
    aria-live="polite"
  >
    ${isArabic ? 'English' : 'العربية'}
  </button>
</header>
<ul class="sights-list">
  ${data.sights
    .map((sight) => {
      return ` <li>
    <a href="#">
      <figure>
        <picture>
          <img
            alt= ${sight.imageAlt}
            loading="lazy"
            src=${sight.imageUrl}
          />
        </picture>
        <figcaption class="sight-info">
          <span class="sight-name">${sight.sightName}</span>
          <span
            class="sight-rating"
            aria-label="${sight.rating.value} out of 5 stars from ${sight.rating.totalReviews} reviews"
            >${sight.rating.value} <span class="star">&#9733;</span> (${sight.rating.totalReviews})</span
          >
          <span class="sight-type">${sight.sightType}</span>
        </figcaption>
      </figure>
    </a>
  </li>`;
    })
    .join('')}
</ul>
</section>
`;

  document.querySelector('#lang-toggle').addEventListener('click', (e) => {
    lang.value = isArabic ? 'en' : 'ar';
    setPreference();
    generateContent();
  });

  document.querySelector('#lang-toggle').focus();
}

generateContent();
