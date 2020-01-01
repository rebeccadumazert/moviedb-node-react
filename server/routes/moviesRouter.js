const router = require('express').Router();
const { MoviesController } = require('../controllers/MoviesController');
const { MovieController } = require('../controllers/MovieController');

router.get('/', MoviesController);
router.get('/:id', MovieController);

module.exports = router;
