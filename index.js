// Require the fastify framework and instantiate it
const fastify = require('fastify')({
  logger: true
})

fastify.register(require('fastify-cors'), {
  // put your options here
  origin: [/\.netlify\.com$/, "http://127.0.0.1:8080", "http://localhost:8080"]
})


// Require external modules
const mongoose = require('mongoose')

const helmet = require('fastify-helmet')

fastify.register(helmet,
  { hidePoweredBy: { setTo: 'PHP 4.2.0' } }
)


// Register Fastify formbody
fastify.register(require('fastify-formbody'))

// Register Routes
fastify.register(require('./routes/flag'), { prefix: '/api' })
fastify.register(require('./routes/professor'), { prefix: '/api' })
fastify.register(require('./routes/rating'), { prefix: '/api' })
fastify.register(require('./routes/vote'), { prefix: '/api' })

// Connect to DB
mongoose.connect('mongodb://localhost:27017/adduprofs', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to mongodb...'))
  .catch(err => console.log(err))
  
mongoose.set('useCreateIndex', true)
mongoose.set('useFindAndModify', false)

// Run the server!
const start = async () => {
  try {
    await fastify.listen(3000, '0.0.0.0')
    fastify.log.info(`server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
