// Using Node so we have to use the code below
const { GraphQLServer } = require('graphql-yoga')
// Import
const mongoose = require('mongoose');
// Connect to Database
mongoose.connect('mongodb://localhost/my_database');

// Schema
const typeDefs = `
  type Query {
    hello(name: String): String!
  }
`

const resolvers = {
  Query: {
    hello: (_, { name }) => `Hello ${name || 'World'}`,
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(() => console.log('Server is running on localhost:4000'))
