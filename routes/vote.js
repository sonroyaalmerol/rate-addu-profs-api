// Import our Controllers
const voteController = require('../controllers/vote')

// Import Swagger documentation
// const documentation = require('./documentation/carApi')

module.exports = (fastify, opts, next) => {
  fastify.route({
    method: 'GET',
    url: '/votes',
    handler: voteController.getVotes,
    schema: {
      tags: ['votes']
    }
  })

  fastify.route({
    method: 'GET',
    url: '/votes/:id',
    handler: voteController.getSingleVote,
    schema: {
      tags: ['votes']
    }
  })

  fastify.route({
    method: 'POST',
    url: '/votes',
    handler: voteController.addVote,
    schema: {
      tags: ['votes']
    }
  })

  fastify.route({
    method: 'PUT',
    url: '/votes/:id',
    handler: voteController.updateVote,
    schema: {
      tags: ['votes']
    }
  })
  
  fastify.route({
    method: 'DELETE',
    url: '/votes/:id',
    handler: voteController.deleteVote,
    schema: {
      tags: ['votes']
    }
  })

  next()
}
