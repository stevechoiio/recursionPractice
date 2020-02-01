class NumberGenerator {
  constructor() {}
  multiply(number) {
    if (number == 0) {
      return 0;
    }
    if (number > 0) {
      return 321 + this.multiply(number - 1);
    }
    if (number < 0) {
      return this.multiply(number + 1) - 321;
    }
  }
}

module.exports = NumberGenerator;
