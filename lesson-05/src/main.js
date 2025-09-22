console.log('Lesson 05 starter loaded');

// 1. Selecting elements
const titleEl = document.querySelector('#page-title');
const taglineEl = document.querySelector('.tagline');
const dynamicBox = document.querySelector('#dynamic-box');
const heroImg = document.querySelector('#hero-img');

console.log(titleEl, taglineEl, dynamicBox);

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

// 5. Use helpers to perform simple tasks

// 6. Footer text tweak (demonstrate class toggle & style change)

// Require innerHTML here to render the &copy; entity correctly

// 7. Null-safety tip: check selections before using them
