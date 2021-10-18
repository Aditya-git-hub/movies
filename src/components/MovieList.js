import React from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { selectMovie, deleteMovie } from "../actions";

const MovieList = () => {
  const movies = useSelector((state) => state.selectedMovie);
  const dispatch = useDispatch();
  const renderList = () => {
    return movies.map((movie, index) => {
      return (
        <>
          <div className="image-card">
            <img src={movie.url} alt="movie poster" />
            <div className="details">
              <h5 className="title">{movie.title}</h5>
              <h6 className="language">{movie.language}</h6>
              <Link
                to={`/movies/${movie.id}`}
                key={movie.id}
                onClick={() => {
                  dispatch(selectMovie(movie));
                }}
              >
                Go to Movie
              </Link>
              <Link
                to="/"
                onClick={() => {
                  dispatch(deleteMovie(`${movie.id}`));
                }}
              >
                Delete
              </Link>
            </div>
          </div>
        </>
      );
    });
  };
  return (
    <div className="content">
      <div className="container">
        <h2 className="heading">Premiers</h2>
        {renderList()}
        <div className="clear"></div>
      </div>
    </div>
  );
};

export default MovieList;
