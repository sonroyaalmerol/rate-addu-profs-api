// External Dependancies
const createError = require('http-errors')

// Get Data Models
const Vote = require('../models/Vote')

// Get all votes
exports.getVotes = async (req, reply) => {
  try {
    const votes = await Vote.find().populate('votes').exec()
    return votes
  } catch (err) {
    reply.send(createError(500, err.message))
  }
}

// Get single vote by ID
exports.getSingleVote = async (req, reply) => {
  try {
    const id = req.params.id
    const vote = await Vote.findById(id).exec()
    return vote
  } catch (err) {
    reply.send(createError(500, err.message))
  }
}

// Add a new vote
exports.addVote = async (req, reply) => {
  try {
    const vote = new Vote(req.body)
    return await vote.save()
  } catch (err) {
    reply.send(createError(500, err.message))
  }
}

// Update an existing vote
exports.updateVote = async (req, reply) => {
  try {
    const id = req.params.id
    const vote = req.body
    const { ...updateData } = vote
    const update = await Vote.findByIdAndUpdate(id, updateData, { new: true }).exec()
    return update
  } catch (err) {
    reply.send(createError(500, err.message))
  }
}

// Delete a vote
exports.deleteVote = async (req, reply) => {
  try {
      const id = req.params.id
      const vote = await Vote.findByIdAndDelete(id).exec()
      return vote
  } catch (err) {
    reply.send(createError(500, err.message))
  }
}
