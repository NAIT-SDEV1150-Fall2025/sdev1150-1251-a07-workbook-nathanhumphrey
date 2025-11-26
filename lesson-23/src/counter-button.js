const template = document.createElement('template');
template.innerHTML = `<button>Clicked 0</button>`;

class CounterButton extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: 'open' });
    const content = template.content.cloneNode(true);

    // this._btn = content.querySelector('button');
    // this._btn.addEventListener('click', () => this._onFollow());
    shadow.appendChild(content);
  }
}
customElements.define('counter-button', CounterButton);

export default CounterButton;
