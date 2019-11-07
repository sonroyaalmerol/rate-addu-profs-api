// External Dependancies
const mongoose = require('mongoose')

const flagSchema = new mongoose.Schema({
  reason: { type: String, enum: ['duplicate', 'spam', 'not-constructive', 'moderator-intervention'] },
  timestamp: { type: Date, default: Date.now },
  _rating: { type: mongoose.Schema.ObjectId, ref: 'Rating' },
})

module.exports = mongoose.model('Flag', flagSchema)
