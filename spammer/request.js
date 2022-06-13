const { parentPort } = require('worker_threads')

const axios = require('axios')

const main = async () => {
  for (let i = 0; i < 3; i++) {
    const response = await axios.get('http://ptr.miragerealms.co.uk/v1/armoury/po%20g')
    if (response.status === 200) {
      parentPort.postMessage(i)
      continue
    }

    console.log(`[ERROR] ${response.status}`)
  }
}

main()
