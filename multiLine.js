/**
 * Make a multi line string using template literal ``
 * @param str {String} the multi line string
 * @param maxSpaces {Number} the max spaces allowed
 * @returns {String}
 */
function multiLine(str, maxSpaces = 2) {
  const regex = new RegExp(` {${maxSpaces},}`, 'g')
  return str.trim().replace(regex, '')
}

(() => {
  console.log(multiLine(`
    hello  woo
    world
    hi
    hello
  `, 3))
})()
