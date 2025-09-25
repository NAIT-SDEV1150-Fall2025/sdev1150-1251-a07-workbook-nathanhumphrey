console.log('Lesson 05 starter loaded');

// 1. Selecting elements
const titleEl = document.querySelector('#page-title');
const taglineEl = document.querySelector('.tagline');
const dynamicBox = document.querySelector('#dynamic-box');
const heroImg = document.querySelector('#hero-img');
const footerNote = document.querySelector('#footer-note');

console.log(titleEl, taglineEl, dynamicBox, heroImg, footerNote);

// 2. textContent vs innerHTML
titleEl.textContent = 'DOM: JavaScript Window into Page Structure';

// Use backticks for multi-line strings
dynamicBox.innerHTML = `
  <p class="desc">
    This block was injected with <em>innerHTML</em>. It can include <strong>markup</strong>.
  </p>`;

// 3. Attributes & styles
heroImg.setAttribute('alt', 'A replaceable sample image');
heroImg.style.borderColor = 'red';

console.log(heroImg.getAttribute('src'));

// 4. Create small helper functions for reuse
function updateText(selector, text) {
  const el = document.querySelector(selector);
  if (!el) {
    return console.warn('No element found for', selector);
  }

  el.textContent = text;
}

function updateHTML(selector, html) {
  const el = document.querySelector(selector);
  if (!el) {
    return console.warn('No element found for', selector);
  }

  el.innerHTML = html;
}

function setAttr(selector, name, value) {
  const el = document.querySelector(selector);
  if (!el) {
    return console.warn('No element found for', selector);
  }

  el.setAttribute(name, value);
}

// OPTIONAL, for advanced students, the following should prove challenging
// to understand.
function setStyle(selector, styleObj = {}) {
  const el = document.querySelector(selector);
  if (!el) {
    return console.warn('No element found for', selector);
  }

  Object.entries(styleObj).forEach(([k, v]) => {
    el.style[k] = v;
  });
}

// 5. Use helpers to perform simple tasks
updateText('.tagline', 'Selecting, reading, and modifying nodes with JavaScript.');
updateHTML('#dynamic-box', `
  <p class="desc">
    Replaced again via <code>updateHTML()</code>. Notice how we can inject different markup here.
  </p>
`);

setAttr('#hero-img', 'title', 'Hover title set from JS');
setStyle('#hero-img', { borderColor: 'navy' });

// 6. Footer text tweak (demonstrate class toggle & style change)
footerNote.classList.add('footer-strong');

// Require innerHTML here to render the &copy; entity correctly
footerNote.innerHTML = '&copy; 2025 SDEV1150';

// 7. Null-safety tip: check selections before using them
const missing = document.querySelector('#does-not-exist');
if (missing === null) {
  console.warn('Selector #does-not-exist did not match any element.');
}
