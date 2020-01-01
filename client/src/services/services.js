import axios from 'axios';

export const getAllMovies = async () => {
  const {
    data: {
      movies: { results },
    },
  } = await axios.get('/api/v1/movies');

  return results;
};

export const getMovie = async id => {
  const {
    data: { movie },
  } = await axios.get(`/api/v1/movies/${id}`);
  console.log(movie);
  return movie;
};
