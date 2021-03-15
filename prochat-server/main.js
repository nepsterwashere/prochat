import { GraphQLServer } from 'graphql-yoga'
import { resolvers, pubsub } from './src/graphql/resolver.js'
import { deleteJob } from './src/cron/jobs.js'
import { connectToDB } from './src/database/mongodb.js'
import typeDefs from './src/graphql/typedefs.js'
import 'dotenv/config.js'

const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } })

function bootstrap() {
  connectToDB()
  deleteJob.start()
  server.start(({ port }) => {
    console.log(`Server started on port ${port}`)
  })
}

bootstrap()
