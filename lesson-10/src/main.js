console.log('Lesson 10 starter loaded');

// 1. Select required elements
const form = document.querySelector('#contact-form');

// 2. Function to gather and structure form data

// Access values using both form.elements and query selectors

// 3. Handle form submission
// Use 'submit' event on the form, not 'click' on the button
// Prevent default behavior (navigation/reload) using event.preventDefault()
form.addEventListener('submit', (e) => {
  e.preventDefault();
});

// 4. Handle form reset - reset the result area text when the form is reset
