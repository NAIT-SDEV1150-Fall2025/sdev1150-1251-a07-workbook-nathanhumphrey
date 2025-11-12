// Import the user-card component to register the custom element

// Create an additional user card using HTML and append it to the main element

// Create another user card using JavaScript DOM API only and append it to the main element

const template = document.querySelector('#primary-button-template');

// PrimaryButton Demo
class PrimaryButton extends HTMLElement {
  constructor() {
    super();
    const content = template.content.cloneNode(true);
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(content);
  }
}
customElements.define('primary-button', PrimaryButton);
