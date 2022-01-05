const description = 'Enter value then press + button';

class Info extends Basic {
  constructor(calculator) {
    super();
    this.element.classList.add('info');
    this.element.innerHTML = description;
    this.calculator = calculator;
    this.values = [];
  }

  setValue(value) {
    this.values.push(value);
    const result = this.calculator.calculate(this.values);
    const history = this.values.reduce((result, value, i) => {
      result += `${i + 1}: ${value} <br>`;
      return result;
    }, '');
    this.element.innerHTML = `Total: ${result} <hr> ${history}`;
  }
}
