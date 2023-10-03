const { gql } = require('apollo-server');

const typeDefs = gql`
  type Movie {
    id: ID!
    title: String!
    releaseDate: String!
  }

  type Query {
    getPopularMovies: [Movie]
  }
`;

module.exports = typeDefs;
