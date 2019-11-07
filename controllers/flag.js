// External Dependancies
const createError = require('http-errors')

// Get Data Models
const Flag = require('../models/Flag')

// Get all flags
exports.getFlags = async (req, reply) => {
  try {
    const flags = await Flag.find().populate('flags').exec()
    return flags
  } catch (err) {
    reply.send(createError(500, err.message))
  }
}

// Get single flag by ID
exports.getSingleFlag = async (req, reply) => {
  try {
    const id = req.params.id
    const flag = await Flag.findById(id).exec()
    return flag
  } catch (err) {
    reply.send(createError(500, err.message))
  }
}

// Add a new flag
exports.addFlag = async (req, reply) => {
  try {
    const flag = new Flag(req.body)
    return await flag.save()
  } catch (err) {
    reply.send(createError(500, err.message))
  }
}

// Update an existing flag
exports.updateFlag = async (req, reply) => {
  try {
    const id = req.params.id
    const flag = req.body
    const { ...updateData } = flag
    const update = await Flag.findByIdAndUpdate(id, updateData, { new: true }).exec()
    return update
  } catch (err) {
    reply.send(createError(500, err.message))
  }
}

// Delete a flag
exports.deleteFlag = async (req, reply) => {
  try {
      const id = req.params.id
      const flag = await Flag.findByIdAndDelete(id).exec()
      return flag
  } catch (err) {
    reply.send(createError(500, err.message))
  }
}
