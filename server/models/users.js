const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  id: { type: String, unique: true, required: true },
  passwords: { type: String, required: true },
  grade: { type: String, default: 'common' },
  nickname: { type: String, required: true },
  email: { type: String, required: true }
})

module.exports = mongoose.model("users", UserSchema)