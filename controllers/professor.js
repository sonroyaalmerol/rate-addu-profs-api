// External Dependancies
const createError = require('http-errors')

// Get Data Models
const Professor = require('../models/Professor')

// Get all professors
exports.getProfessors = async (req, reply) => {
  try {
    const professors = await Professor.find().populate('ratings').exec()
    return professors
  } catch (err) {
    reply.send(createError(500, err.message))
  }
}

// Get single professor by ID
exports.getSingleProfessor = async (req, reply) => {
  try {
    const id = req.params.id
    const professor = await Professor.findById(id).exec()
    return professor
  } catch (err) {
    reply.send(createError(500, err.message))
  }
}

// Add a new professor
exports.addProfessor = async (req, reply) => {
  try {
    const professor = new Professor(req.body)
    return await professor.save()
  } catch (err) {
    reply.send(createError(500, err.message))
  }
}

// Update an existing professor
exports.updateProfessor = async (req, reply) => {
  try {
    const id = req.params.id
    const professor = req.body
    const { ...updateData } = professor
    const update = await Professor.findByIdAndUpdate(id, updateData, { new: true }).exec()
    return update
  } catch (err) {
    reply.send(createError(500, err.message))
  }
}

// Delete a professor
exports.deleteProfessor = async (req, reply) => {
  try {
      const id = req.params.id
      const professor = await Professor.findByIdAndDelete(id).exec()
      return professor
  } catch (err) {
    reply.send(createError(500, err.message))
  }
}
