// Import the user-card component to register the custom element
import './user-card.js';
import './primary-button.js';

// Create an additional user card using HTML and append it to the main element
const dynamicUserCard = `
    <user-card avatar="https://placehold.co/80x80/7700ff/ffffff">
      <span slot="name">Jane Doe</span>
      <span slot="description">Software Engineer</span>
    </user-card>`;

document.querySelector('main').insertAdjacentHTML('beforeend', dynamicUserCard);

// Create another user card using JavaScript DOM API only and append it to the main element
const anotherUserCard = document.createElement('user-card');
anotherUserCard.setAttribute('avatar', 'https://placehold.co/80x80/770000/ffffff');
const nameSpan = document.createElement('span');
nameSpan.setAttribute('slot', 'name');
nameSpan.textContent = 'John Smith';
const descSpan = document.createElement('span');
descSpan.setAttribute('slot', 'description');
descSpan.textContent = 'Frontend Developer';
anotherUserCard.appendChild(nameSpan);
anotherUserCard.appendChild(descSpan);

document.querySelector('main').appendChild(anotherUserCard);
// Why doesn't the custom avatar show up for this element?
