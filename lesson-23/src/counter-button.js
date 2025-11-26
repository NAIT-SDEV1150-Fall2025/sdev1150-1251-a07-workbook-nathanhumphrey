const template = document.createElement('template');
template.innerHTML = `<button>Clicked 0</button>`;

class CounterButton extends HTMLElement {
  #count;

  constructor() {
    super();

    this.#count = 0;

    this._handleClick = this._handleClick.bind(this);

    const shadow = this.attachShadow({ mode: 'open' });
    const content = template.content.cloneNode(true);
    this._btn = content.querySelector('button');

    shadow.appendChild(content);
  }

  connectedCallback() {
    this._btn.addEventListener('click', this._handleClick);
  }

  disconnectedCallback() {
    this._btn.addEventListener('click', this._handleClick);
  }

  _handleClick() {
    this.#count += 1;
    this._btn.textContent = `Clicked ${this.#count}`;
  }

  get count() {
    return this.#count;
  }
}
customElements.define('counter-button', CounterButton);

export default CounterButton;
