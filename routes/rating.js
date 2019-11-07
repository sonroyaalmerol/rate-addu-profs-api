// Import our Controllers
const ratingController = require('../controllers/rating')

// Import Swagger documentation
// const documentation = require('./documentation/carApi')

module.exports = (fastify, opts, next) => {
  fastify.route({
    method: 'GET',
    url: '/ratings',
    handler: ratingController.getRatings,
    schema: {
      tags: ['ratings']
    }
  })

  fastify.route({
    method: 'GET',
    url: '/ratings/:id',
    handler: ratingController.getSingleRating,
    schema: {
      tags: ['ratings']
    }
  })

  fastify.route({
    method: 'POST',
    url: '/ratings',
    handler: ratingController.addRating,
    schema: {
      tags: ['ratings']
    }
  })

  fastify.route({
    method: 'PUT',
    url: '/ratings/:id',
    handler: ratingController.updateRating,
    schema: {
      tags: ['ratings']
    }
  })
  
  fastify.route({
    method: 'DELETE',
    url: '/ratings/:id',
    handler: ratingController.deleteRating,
    schema: {
      tags: ['ratings']
    }
  })

  next()
}
