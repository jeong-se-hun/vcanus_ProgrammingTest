function Calculator(number = 0) {
  this.number = number;
}

Calculator.prototype.add = function (num) {
  this.number += num;
  return this;
};

Calculator.prototype.subtract = function (num) {
  this.number -= num;
  return this;
};

Calculator.prototype.out = function () {
  return this.number;
};

const calculator = new Calculator();

const result = calculator.add(4).add(5).subtract(3).out();
console.log(result);
