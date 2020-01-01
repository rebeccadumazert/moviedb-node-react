const axios = require('axios');
// const { auth } = require('../auth');

const START_URL = 'https://api.themoviedb.org/3/';

const allMovies = async () => {
  console.log('hello');
  const { data } = await axios.get(`${START_URL}discover/movie`, {
    params: {
      api_key: 'b35fb14b962b39050406502348353b36',
    },
  });
  return data;
};

const movieById = async id => {
  const { data } = await axios.get(`${START_URL}movie/${id}`, {
    params: {
      api_key: 'b35fb14b962b39050406502348353b36',
    },
  });
  return data;
};

module.exports = { allMovies, movieById };
