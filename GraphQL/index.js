const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');

const resolvers = require('./resolvers');
const typeDefs = require('./types');

const context = {};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context,
});

startStandaloneServer(server).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
