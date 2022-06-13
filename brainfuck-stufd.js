const { exec } = require('child_process')

const input = 'Hello world baby!'
let output = ''

for (let i = 0; i < input.length; i++) {
  const curr = input.charAt(i)
  let segs = ''

  for (let j = 0; j < curr.charCodeAt(0); j++) {
    segs += '+'
  }

  output += `${segs}.>`
}

exec(`brainfuck -e "${output}"`, (err, stdout, stderr) => {
  if (err || stderr)
    return console.log(err || stderr)

  console.log(stdout)
})
