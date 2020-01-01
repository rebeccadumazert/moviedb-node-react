const MoviesRouter = require('./routes/moviesRouter');

function routes(app) {
  app.use('/api/v1/movies', MoviesRouter);
}

module.exports = routes;
