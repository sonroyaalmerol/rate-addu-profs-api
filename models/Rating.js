// External Dependancies
const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
  date: String,
  class: String,
  easiness: Number,
  helpfulness: Number,
  pedagogy: Number,
  attendance: Boolean,
  comment: String,
  votes: [{ type: mongoose.Schema.ObjectId, ref: 'Vote' }],
  timestamp: { type: Date, default: Date.now },
  _professor: { type: mongoose.Schema.ObjectId, ref: 'Professor' },
  flags: [{ type: mongoose.Schema.ObjectId, ref: 'Flag' }]
})

module.exports = mongoose.model('Rating', ratingSchema)
