const template = document.createElement('template');
template.innerHTML = `
<style>
  button {
    border-radius: 0.25rem;
    border-color: #06295c;
    background-color: #1875ff;
    color: #ffffff;
    padding:  0.5rem;
    cursor: pointer;
  }
  button:active {
    border-radius: 0.25rem;
    border-color: #06295c;
    background-color: #0054d2ff;
    color: #ffffff;
    padding:  0.5rem;
  }
</style>
<button>
  <slot>Button Text</slot>
</button>`;

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

export default PrimaryButton;
