const {
  fetchData,
  createURL,
  GET_POPULAR,
  GET_MOVIE,
  GET_BY_QUERY,
  GET_TOP_RATED,
  GET_NOW_PLAYING,
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
      const response = {
        movies: result.results,
        total_pages: result.total_pages,
      };
      return response;
    },

    getTopRatedMovies: async (parent, { page, language }, context) => {
      const result = await fetchData(
        createURL(GET_TOP_RATED, {
          page: page,
          language: language,
        })
      );
      return result.results;
    },

    getNowPlayingMovies: async (parent, { page, language }, context) => {
      const result = await fetchData(
        createURL(GET_NOW_PLAYING, {
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
