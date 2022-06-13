const memory = new Array(300).fill(0)
let currentCell = 0

const code = '+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++.'

for (let i = 0; i < code.length; i++) {
  const curr = code.charAt(i)

  switch(curr) {
    case '>':
      currentCell++
      break
    case '<':
      currentCell--
      break
    case '+':
      memory[currentCell]++
      break
    case '-':
      memory[currentCell]--
      break
    case '.':
      console.log(String.fromCharCode(memory[currentCell]))
      break
    case '[':
      break
    case ']':
      break
  }
}

