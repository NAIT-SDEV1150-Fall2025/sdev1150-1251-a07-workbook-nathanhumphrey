console.log('Lesson 06 starter loaded');

// Selecting elements
const titleEl = document.querySelector('#page-title');
const taglineEl = document.querySelector('.tagline');
const heroImg = document.querySelector('#hero-img');
const heroCaption = document.querySelector('#hero-caption');
const dynamicBox = document.querySelector('#dynamic-box');
const footerNote = document.querySelector('#footer-note');

// 1. New element for list manipulation
const featureList = document.querySelector('#feature-list');

// 2. Add feature list to the displayed elements
console.log('Selected elements:', {
  titleEl, taglineEl, heroImg, heroCaption, featureList, dynamicBox, footerNote,
});

// 3. Add a new item dynamically
const li = document.createElement('li');
li.className = 'feature';
li.textContent = 'Flexible';
featureList.appendChild(li);

// 4. Retreive all list items (querySelectorAll) and update their text
const features = document.querySelectorAll('.feature');
features.forEach((li, idx) => {
  li.textContent = `${idx + 1}. ${li.textContent}`;
});

// 5. Removing the first item from the list using DOM relationships to find it
featureList.removeChild(featureList.firstElementChild);

// 6. Update the second item using nextElementSibling
featureList.firstChild.nextElementSibling.textContent += ' (updated)';

// 7. Move the last item to the front of the list
const last = featureList.removeChild(featureList.lastChild);
featureList.insertBefore(last, featureList.firstChild);

// 8. Use a timer to add a new item after 3 seconds have passed
function addLi() {
  const newLi = document.createElement('li');
  newLi.className = 'feature';
  newLi.textContent = 'I am new! (added after 3 seconds)';
  featureList.appendChild(newLi);
}

// note, no parens are used on the function name, we are passing the function
// not calling it now.
setTimeout(addLi, 3000);

// **** THE FOLLOWING IS EXISTING CODE FROM LESSON 05

// textContent vs innerHTML
titleEl.textContent = 'DOM: Your JavaScript Window into Page Structure';

dynamicBox.innerHTML = `
  <p class="desc">
    This block was injected with <em>innerHTML</em>. It can include <strong>markup</strong>.
  </p>
`;

// When you only need text (no markup), prefer textContent:
heroCaption.textContent = 'This caption was updated using textContent.';

// Attributes & styles
heroImg.setAttribute('alt', 'A replaceable sample image');
heroImg.style.borderColor = '#0d6efd'; // inline style to illustrate visual change

// Create small helper functions for reuse
function updateText(selector, text) {
  const el = document.querySelector(selector);
  if (!el) return console.warn('No element found for', selector);
  el.textContent = text;
}

function updateHTML(selector, html) {
  const el = document.querySelector(selector);
  if (!el) return console.warn('No element found for', selector);
  el.innerHTML = html;
}

function setAttr(selector, name, value) {
  const el = document.querySelector(selector);
  if (!el) return console.warn('No element found for', selector);
  el.setAttribute(name, value);
}

function setStyle(selector, styleObj = {}) {
  const el = document.querySelector(selector);
  if (!el) return console.warn('No element found for', selector);
  Object.entries(styleObj).forEach(([k, v]) => {
    el.style[k] = v;
  });
}

// Use helpers to perform simple tasks
updateText('.tagline', 'Selecting, reading, and modifying nodes with JavaScript.');
updateHTML('#dynamic-box', `
  <p class="desc">
    Replaced again via <code>updateHTML()</code>. Notice how we can inject different markup here.
  </p>
`);

setAttr('#hero-img', 'title', 'Hover title set from JS');
setStyle('#hero-img', { borderColor: 'navy' });

// Footer text tweak (demonstrate class toggle & style change)
footerNote.classList.add('footer-strong');
// Require innerHTML here to render the &copy; entity correctly
footerNote.innerHTML = '&copy; 2025 Front End Fundamentals';

// Null-safety tip: check selections before using them
const missing = document.querySelector('#does-not-exist');
if (!missing) {
  console.warn('Selector #does-not-exist did not match any element.');
}
