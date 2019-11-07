// External Dependancies
const mongoose = require('mongoose')

const voteSchema = new mongoose.Schema({
  up: Boolean,
  timestamp: { type: Date, default: Date.now },
  _rating: { type: mongoose.Schema.ObjectId, ref: 'Rating' },
})

module.exports = mongoose.model('Vote', voteSchema)
