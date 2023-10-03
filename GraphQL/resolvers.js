const {
  fetchData,
  createURL,
  GET_POPULAR,
  GET_MOVIE,
  GET_BY_QUERY,
} = require('./api');

const resolvers = {
  Query: {
    getPopularMovies: async (parent, { page, language }, context) => {
      const result = await fetchData(
        createURL(GET_POPULAR, {
          page: page,
          language: language,
        })
      );
      return result.results;
    },

    getMovie: async (parent, { id, language }, context) => {
      const result = await fetchData(
        createURL(GET_MOVIE, { id: id, language: language })
      );
      return result;
    },

    getSearchedMovie: async (parent, { query, language, page }, context) => {
      const result = await fetchData(
        createURL(GET_BY_QUERY, {
          query: query,
          language: language,
          page: page,
        })
      );
      return result.results;
    },
  },
};

module.exports = resolvers;
