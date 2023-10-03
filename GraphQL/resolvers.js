const { fetchData, createURL, CREATE_URL_DEFAULT_PROPS } = require('./api');

const resolvers = {
  Query: {
    getPopularMovies: async (parent, { page, language }, context) => {
      const result = await fetchData(
        createURL({
          ...CREATE_URL_DEFAULT_PROPS,
          page: page,
          language: language,
        })
      );
      return result.results;
    },

    getMovie: async (parent, { id, language }, context) => {
      const result = await fetchData(
        createURL({ ...CREATE_URL_DEFAULT_PROPS, id: id, language: language })
      );
      return result;
    },
  },
};

module.exports = resolvers;
