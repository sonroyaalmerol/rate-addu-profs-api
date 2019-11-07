// External Dependancies
const mongoose = require('mongoose')

const professorSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  department: String,
  ratings: [{ type: mongoose.Schema.ObjectId, ref: 'Rating' }],
})

module.exports = mongoose.model('Professor', professorSchema)
