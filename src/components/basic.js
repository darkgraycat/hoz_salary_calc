class Basic {
  constructor() {
    this.element = document.createElement('div');
    this.element.classList.add('basic');
  }

  create() {
    const parent = document.getElementById('root');
    parent.appendChild(this.element);
  }
}
