console.log('Lesson 10 starter loaded');

// ============== Propagation demo

// 1. Select required elements
const log = document.querySelector('#log');
const outer = document.querySelector('#outer');
const inner = document.querySelector('#inner');
const button = document.querySelector('#btn-propagate');

// 2. Add event listeners

// 2.1 Outer div - using a named function
function outerClick() {
  log.textContent += 'Outer clicked (capture) | ';
}

outer.addEventListener('click', outerClick, true);

// 2.2 Inner div - using an anonymous function
inner.addEventListener('click', function () {
  log.textContent += 'Inner clicked (bubble) | ';
});

// 2.3 Button - using an arrow function
button.addEventListener('click', (e) => {
  log.textContent += 'Button clicked | ';

  // Stop propagation
  e.stopPropagation();
});

// ============== Gallery demo

// 1. Select required elements
const thumbnails = document.querySelector('.thumbnails');
const mainImage = document.querySelector('#main-image');
const viewer = document.querySelector('.viewer');
const closeBtn = document.querySelector('#close-viewer');

// 2. Add event listeners

// 2.1 Thumbnails container - using an arrow function
thumbnails.addEventListener('click', (e) => {
  if (e.target.tagName === 'IMG') {
    mainImage.src = e.target.src;
    viewer.classList.add('show');
  }
});

// 2.2 Close button - using an arrow function
closeBtn.addEventListener('click', () => {
  viewer.classList.remove('show');
});

// Student TODO: Add event listener to document, which closes
// the viewer when the Escape key is pressed
