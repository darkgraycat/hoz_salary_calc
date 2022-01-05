(() => {
  const calculator = new Calculator(20);

  const input = new Input();
  const info = new Info(calculator);
  const add = new Add(input, info);

  input.create();
  add.create();
  info.create();

})();
