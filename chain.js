const calc = {
  value: 0,

  add: function(v) {
    this.value = this.value + v

    return this
  },
  sub: function(v) {
    this.value = this.value - v

    return this
  },
  mul: function(v) {
    this.value = this.value * v

    return this
  },
  div: function(v) {
    this.value = this.value / v

    return this
  },
  done: function() {
    return this.value
  }
}

function chain(value) {
  const c = calc
  c.value = value

  return c
}

console.log(
  chain(0)
    .add(5)
    .sub(1)
    .mul(2)
    .div(2)
    .done()
)
