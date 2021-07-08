const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {
    type: String
  },
  namaLengkap: {
    type: String
  },
  Email: {
    type: String
  },
  password: {
    type: String
  },
  Level: {
    type: Number,
    default: 2
  }
})

module.exports = mongoose.model('user', UserSchema)
