const NumberGenerator = require("./");
test("given integers, output the value times 321", () => {
  const calculator = new NumberGenerator();
  expect(calculator.multiply(1)).toBe(1 * 321);
  expect(calculator.multiply(2)).toBe(2 * 321);
  expect(calculator.multiply(5000)).toBe(5000 * 321);
  expect(calculator.multiply(-10)).toBe(-10 * 321);
  expect(calculator.multiply(0)).toBe(0);
});
