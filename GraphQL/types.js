const { gql } = require('apollo-server');

const typeDefs = gql`
  type Movie {
    id: ID!
    title: String!
    releaseDate: String!
  }

  type Query {
    getMovies: [Movie]
  }
`;

module.exports = typeDefs;
