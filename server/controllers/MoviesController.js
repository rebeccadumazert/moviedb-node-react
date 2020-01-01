const { allMovies } = require('../stores/moviesStore');

const MoviesController = async (req, res) => {
  const movies = await allMovies();
  res.json({ movies });
};

module.exports = { MoviesController };
