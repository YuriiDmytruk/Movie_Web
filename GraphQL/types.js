const { gql } = require('apollo-server');

const typeDefs = gql`
  type Movie {
    adult: Boolean!
    backdrop_path: String!
    genre_ids: [ID!]
    id: ID!
    original_language: String!
    original_title: String!
    overview: String!
    popularity: Int!
    poster_path: String!
    release_date: String!
    title: String!
    video: Boolean!
    vote_average: Int!
    vote_count: Int!
  }

  type Query {
    getPopularMovies: [Movie]
  }
`;

module.exports = typeDefs;
