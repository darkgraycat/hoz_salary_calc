class Add extends Basic {
  constructor(input, output) {
    super();
    this.element = document.createElement('button');
    this.element.classList.add('add');
    this.element.innerHTML = '+';
    this.element.addEventListener('click', (e) => {
      e.preventDefault();
      const value = input.getValue();
      output.setValue(value);
      input.clear();
    });
  }
}
