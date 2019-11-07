// Import our Controllers
const flagController = require('../controllers/flag')

// Import Swagger documentation
// const documentation = require('./documentation/carApi')

module.exports = (fastify, opts, next) => {
  fastify.route({
    method: 'GET',
    url: '/flags',
    handler: flagController.getFlags,
    schema: {
      tags: ['flags']
    }
  })

  fastify.route({
    method: 'GET',
    url: '/flags/:id',
    handler: flagController.getSingleFlag,
    schema: {
      tags: ['flags']
    }
  })

  fastify.route({
    method: 'POST',
    url: '/flags',
    handler: flagController.addFlag,
    schema: {
      tags: ['flags']
    }
  })

  fastify.route({
    method: 'PUT',
    url: '/flags/:id',
    handler: flagController.updateFlag,
    schema: {
      tags: ['flags']
    }
  })
  
  fastify.route({
    method: 'DELETE',
    url: '/flags/:id',
    handler: flagController.deleteFlag,
    schema: {
      tags: ['flags']
    }
  })

  next()
}
