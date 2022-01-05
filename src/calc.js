class Calculator {
  constructor(pricePerThouthandSigns) {
    this.price = pricePerThouthandSigns;
  }

  calculate(values) {
    const summ = values.reduce((total, value) => total + value, 0);
    return summ / 1000 * this.price;
  }
}
