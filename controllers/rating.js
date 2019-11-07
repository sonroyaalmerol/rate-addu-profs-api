// External Dependancies
const createError = require('http-errors')

// Get Data Models
const Rating = require('../models/Rating')

// Get all ratings
exports.getRatings = async (req, reply) => {
  try {
    const ratings = await Rating.find().populate('ratings').exec()
    return ratings
  } catch (err) {
    reply.send(createError(500, err.message))
  }
}

// Get single rating by ID
exports.getSingleRating = async (req, reply) => {
  try {
    const id = req.params.id
    const rating = await Rating.findById(id).exec()
    return rating
  } catch (err) {
    reply.send(createError(500, err.message))
  }
}

// Add a new rating
exports.addRating = async (req, reply) => {
  try {
    const rating = new Rating(req.body)
    return await rating.save()
  } catch (err) {
    reply.send(createError(500, err.message))
  }
}

// Update an existing rating
exports.updateRating = async (req, reply) => {
  try {
    const id = req.params.id
    const rating = req.body
    const { ...updateData } = rating
    const update = await Rating.findByIdAndUpdate(id, updateData, { new: true }).exec()
    return update
  } catch (err) {
    reply.send(createError(500, err.message))
  }
}

// Delete a rating
exports.deleteRating = async (req, reply) => {
  try {
      const id = req.params.id
      const rating = await Rating.findByIdAndDelete(id).exec()
      return rating
  } catch (err) {
    reply.send(createError(500, err.message))
  }
}
