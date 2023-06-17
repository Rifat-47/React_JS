import React from 'react';

import classes from './Movie.module.css';

const Movie = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>Director: {props.director}</h3>
      <h3>Producer: {props.producer}</h3>
      <h4>Release: {props.releaseDate}</h4>
      <p>{props.openingText}</p>
    </li>
  );
};

export default Movie;
