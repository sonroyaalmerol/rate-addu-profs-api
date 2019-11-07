// Import our Controllers
const professorController = require('../controllers/professor')

// Import Swagger documentation
// const documentation = require('./documentation/carApi')

module.exports = (fastify, opts, next) => {
  fastify.route({
    method: 'GET',
    url: '/professors',
    handler: professorController.getProfessors,
    schema: {
      tags: ['professors']
    }
  })

  fastify.route({
    method: 'GET',
    url: '/professors/:id',
    handler: professorController.getSingleProfessor,
    schema: {
      tags: ['professors']
    }
  })

  fastify.route({
    method: 'POST',
    url: '/professors',
    handler: professorController.addProfessor,
    schema: {
      tags: ['professors']
    }
  })

  fastify.route({
    method: 'PUT',
    url: '/professors/:id',
    handler: professorController.updateProfessor,
    schema: {
      tags: ['professors']
    }
  })
  
  fastify.route({
    method: 'DELETE',
    url: '/professors/:id',
    handler: professorController.deleteProfessor,
    schema: {
      tags: ['professors']
    }
  })

  next()
}
