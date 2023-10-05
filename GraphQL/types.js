const { gql } = require('apollo-server');

const typeDefs = gql`
  type ShortMovie {
    adult: Boolean!
    backdrop_path: String
    genre_ids: [ID!]
    id: ID!
    original_language: String!
    original_title: String!
    overview: String!
    popularity: Int!
    poster_path: String
    release_date: String!
    title: String!
    video: Boolean!
    vote_average: Int!
    vote_count: Int!
    total_pages: Int!
  }

  type Genre {
    id: ID!
    name: String!
  }

  type Company {
    id: ID!
    logo_path: String!
    name: String
    origin_country: String!
  }

  type Language {
    english_name: String!
    iso_639_1: String!
    name: String!
  }

  type Country {
    iso_3166_1: String!
    name: String!
  }

  type Movie {
    adult: Boolean!
    backdrop_path: String
    belongs_to_collection: String
    budget: Int!
    genres: [Genre]
    homepage: String
    id: ID!
    imdb_id: String
    original_language: String!
    original_title: String!
    overview: String!
    popularity: Float!
    poster_path: String!
    production_companies: [Company]
    production_countries: [Country]
    release_date: String!
    revenue: Int!
    runtime: Int!
    spoken_languages: [Language]
    status: String!
    tagline: String!
    title: String!
    video: Boolean!
    vote_average: Float!
    vote_count: Float!
  }

  type Query {
    getPopularMovies(page: Int!, language: String!): [ShortMovie]
    getTopRatedMovies(page: Int!, language: String!): [ShortMovie]
    getNowPlayingMovies(page: Int!, language: String!): [ShortMovie]
    getMovie(id: ID!, language: String!): Movie
    getSearchedMovie(
      query: String!
      language: String!
      page: Int!
    ): [ShortMovie]
  }
`;

module.exports = typeDefs;
