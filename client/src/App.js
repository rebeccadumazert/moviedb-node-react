import React from 'react';
import './App.css';
import Movies from './components/Movies';
import  Movie  from './components/Movie.js';
import { BrowserRouter, Route } from 'react-router-dom';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={Movies}></Route>
        <Route path="/movie/:id" component={Movie}></Route>
      </BrowserRouter>
    );
  }
}
