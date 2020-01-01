const { movieById } = require('../stores/moviesStore');

const MovieController = async (req, res) => {
  console.log(req.params.id);
  const movie = await movieById(req.params.id);
  res.json({ movie });
};

module.exports = { MovieController };
