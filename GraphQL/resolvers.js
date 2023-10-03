const fetchPopulatMovies = require('./api');

const resolvers = {
  Query: {
    getPopularMovies: () => {
      return fetchPopulatMovies().results;
    },
  },
};

module.exports = resolvers;
