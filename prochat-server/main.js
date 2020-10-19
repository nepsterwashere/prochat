const { GraphQLServer } = require('graphql-yoga')
const { connect } = require('./src/database/mongodb')
const { resolvers, pubsub } = require('./src/graphql/resolver')
const { typeDefs } = require('./src/graphql/typedefs')
const { deleteJob } = require('./src/cron/deletejob')
require('dotenv').config()

const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } })

function bootstrap() {
  connect()
  deleteJob.start()
  server.start(({ port }) => {
    console.log(`Server started on http://localhost:${port}`)
  })
}

bootstrap()
