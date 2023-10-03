const fetchPopulatMovies = require('./api');

const resolvers = {
  Query: {
    getPopularMovies: () => {
      console.log(fetchPopulatMovies());
      return [
        { id: '1', title: 'Movie 1', releaseDate: '2023-01-01' },
        { id: '2', title: 'Movie 2', releaseDate: '2023-02-01' },
      ];
    },
  },
};

module.exports = resolvers;
