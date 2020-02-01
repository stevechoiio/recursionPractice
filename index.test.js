const NumberGenerator = require("./index");
test("adds 1 + 2 to equal 3", () => {
  const NumberGenerato = new NumberGenerator();
  expect(NumberGenerato.multiply(1)).toBe(1 * 321);
  expect(NumberGenerato.multiply(2)).toBe(2 * 321);
  expect(NumberGenerato.multiply(3)).toBe(3 * 321);
  expect(NumberGenerato.multiply(-10)).toBe(-10 * 321);
  expect(NumberGenerato.multiply(0)).toBe(0);
});
