const { GraphQLServer } = require("graphql-yoga")

const typeDefs = `
  type: Message {
    id: ID!
    user: String
    content: String
  }

  type: Query {
    messages: [Message!]
  }
`

const resolvers = {
  Query: {
    messages: () => []
  }
}

const server = new GraphQLServer({ typeDefs, resolvers })

server.start(({ port }) => {
  console.log(`Server started on http://localhost:${port}`)
})