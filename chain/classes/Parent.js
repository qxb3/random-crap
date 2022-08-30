class Parent {
  cons

  static chain(...value) {
    const calculator = new this(value)
    return calculator
  }

  done() {
    return this.value
  }
}
