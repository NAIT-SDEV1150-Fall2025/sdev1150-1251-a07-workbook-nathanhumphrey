console.log('Lesson 08 starter loaded');

// 1. load event (document ready) - NOTE this is unnecessary if using `defer` in the script tag or using module type
document.addEventListener('DOMContentLoaded', function () {
  console.log('DOM is ready');
  // 2. Selecting elements
  const btnToggle = document.querySelector('#btn-toggle');
  const btnMessage = document.querySelector('#btn-message');
  const message = document.querySelector('#message');
  const hoverCard = document.querySelector('#hover-card');
  const hoverStatus = document.querySelector('#hover-status');
  const keyOutput = document.querySelector('#key-output');
  const list = document.querySelector('#list');
  const selection = document.querySelector('#selection');

  // 3. click: toggle a highlight class on the body
  btnToggle.addEventListener('click', function () {
    document.body.classList.toggle('highlight');
    const toggleOn = document.body.classList.contains('highlight');

    if (toggleOn === true) {
      btnToggle.textContent = 'Highlight is ON';
    } else {
      btnToggle.textContent = 'Highlight is OFF';
    }
  });
  // 4. click: change message textContent (no HTML parsing)
  btnMessage.addEventListener('click', () => {
    const today = new Date();
    message.textContent = `Message updated at ${today.toLocaleString()}`;
  });
  // 5. mouseover / mouseout: display hover status on the card
  hoverCard.addEventListener('mouseover', () => {
    hoverStatus.textContent = 'Status: Hovering';
  });

  hoverCard.addEventListener('mouseout', () => {
    hoverStatus.textContent = 'Status: Not Hovering';
  });

  // 6. keydown: show last key pressed (global listener)
  document.addEventListener('keydown', function (e) {
    keyOutput.textContent = `Last key: ${e.key} (code: ${e.code})`;
  });

  // 7. Event delegation: one listener on the <ul> for all <li> elements
  list.addEventListener('click', (e) => {
    const target = e.target; // get the target element
    if (target.tagName === 'LI') {
      selection.textContent = `Selected: ${target.getAttribute('data-id')}`;
    }
  });
});
