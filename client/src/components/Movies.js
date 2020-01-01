import React, { Component } from 'react';
import { getAllMovies } from '../services/services';
import { Link } from 'react-router-dom';
import './styles/movies.css';

const START_URL = 'https://image.tmdb.org/t/p/w300/';

export default class Movies extends Component {
  state = {
    movies: [],
  };
  componentDidMount() {
    this.fetchAllMovies();
  }

  fetchAllMovies = async () => {
    const movies = await getAllMovies();
    this.setState({
      movies,
    });
  };

  render() {
    const { movies = [] } = this.state;
    console.log(movies, 'mmmm');
    return (
      <div className="containerMovies">
        {movies.map(({ title, id, poster_path }) => (
          <div className="containerMovie">
            <Link to={`/movie/${id}`}>
              <p key={id}>{title}</p>
              <img key={id + 'img'} src={`${START_URL}${poster_path}`} alt="" />
            </Link>
          </div>
        ))}
      </div>
    );
  }
}
