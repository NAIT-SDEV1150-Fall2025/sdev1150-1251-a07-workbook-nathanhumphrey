const template = document.createElement('template');
template.innerHTML = `
<style>
  :host {
    --card-color: var(--global-card-color, #ffffff);
    --card-background-color: var(--global-card-background-color, #1875ff);
    --card-border-color: var(--global-card-border-color, #06295c);
    --card-active-background-color: var(--global-card-active-background-color , #0054d2);
  }
  button {
    border-radius: 0.25rem;
    border-color: var(--card-border-color);
    background-color: var(--card-background-color);
    color: var(--card-color);
    padding:  0.5rem;
    cursor: pointer;
  }
  button:active {
    border-radius: 0.25rem;
    border-color: var(--card-border-color);
    background-color: var(--card-active-background-color);
    color: var(--card-color);
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
