console.log('Lesson 10 starter loaded');

// 1. Select required elements
const form = document.querySelector('#contact-form');
const result = document.querySelector('#result');

// 2. Function to gather and structure form data
function serializeForm(formEl) {
  // get the name, email, and bio
  const fullNameValue = formEl.elements.fullName.value;
  // TODO: get the email and bio

  // OPTIONAL: get the plan and topic values as well

  // Add the remaining fields here
  return {
    fullName: fullNameValue,
  };
}

// Access values using both form.elements and query selectors

// 3. Handle form submission
// Use 'submit' event on the form, not 'click' on the button
// Prevent default behavior (navigation/reload) using event.preventDefault()
form.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = serializeForm(form);

  // TODO: display the remaining values
  result.textContent = `
    Submission received:
    - Name: ${data.fullName}
  `;
});

// 4. Handle form reset - reset the result area text when the form is reset
form.addEventListener('reset', () => {
  result.textContent = 'Awaiting submission...';
});
