const { Worker } = require('worker_threads')

let totalRequests = 0

for (let i = 0; i < 3; i++) {
  const worker = new Worker('./request')

  worker.on('message', () => {
    totalRequests++

    console.log(`Total request: ${totalRequests}`)
  })
}
