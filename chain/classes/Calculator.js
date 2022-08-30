class Calculator {
  constructor(value = 0) {
    this.value = value
  }

  static chain(value) {
    const calculator = new Calculator(value)
    return calculator
  }

  add(v) {
    this.value = this.value + v
    return this
  }

  sub(v) {
    this.value = this.value - v
    return this
  }

  mul(v) {
    this.value = this.value * v
    return this
  }

  div(v) {
    this.value = this.value / v
    return this
  }

  mod(v) {
    this.value = this.value % v
    return this
  }

  done() {
    return this.value
  }
}

module.exports = Calculator
