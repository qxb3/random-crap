const Calculator = require('./classes/Calculator')

console.log(
  Calculator
    .chain()
    .add(5)
    .sub(1)
    .mul(2)
    .div(2)
    .done()
)
