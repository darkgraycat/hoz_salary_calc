class Input extends Basic {
  constructor() {
    super();
    this.element = document.createElement('input');
    this.element.classList.add('input');
    this.element.setAttribute('placeholder', 'enter a number');
    this.element.setAttribute('type', 'number');
  }

  getValue() {
    return +this.element.value;
  }

  clear() {
    this.element.value = '';
    this.element.focus();
  }
}
