import React, { Component } from 'react';
import { getMovie } from '../services/services';

const START_URL = 'https://image.tmdb.org/t/p/w300/';

export default class Movie extends Component {
  state = {
    movie: {},
  };

  componentDidMount() {
    this.fetchMovie();
  }

  fetchMovie = async () => {
    const {
      match: {
        params: { id },
      },
    } = this.props;
    const movie = await getMovie(id);
    this.setState({ movie }, () => console.log(movie, 'hello'));
  };

  render() {
    const {
      movie: { backdrop_path, original_title, overview } = {},
    } = this.state;
    return (
      <div>
        <h1>{original_title}</h1>
        <img src={`${START_URL}${backdrop_path}`} alt="" />
        <p>{overview} </p>
      </div>
    );
  }
}
