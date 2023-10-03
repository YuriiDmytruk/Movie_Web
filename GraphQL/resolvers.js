const resolvers = {
  Query: {
    getMovies: () => {
      // Fetch and return a list of movies from your data source
      return [
        { id: '1', title: 'Movie 1', releaseDate: '2023-01-01' },
        { id: '2', title: 'Movie 2', releaseDate: '2023-02-01' },
      ];
    },
  },
};

module.exports = resolvers;
