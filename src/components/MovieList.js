import React from "react";

import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux"; /* Import Kar*/

import { selectMovie } from "../actions";

const MovieList = () => {
  /** Props kadh */
  const movies = useSelector((state) => state.movies); /** He lines add kar */
  const dispatch = useDispatch(); /** He lines add kar */
  const renderList = () => {
    return movies.map((movie) => {
      /** Props kadh */
      return (
        <Link
          to={`/movies/${movie.id}`}
          key={movie.id}
          onClick={() => {
            dispatch(selectMovie(movie)); /** he line add kar */
          }}
        >
          <div className="image-card">
            <img src={movie.url} alt="movie poster" />
            <div className="details">
              <h5 className="title">{movie.title}</h5>
              <h6 className="language">{movie.language}</h6>
            </div>
          </div>
        </Link>
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

/** mapStateToProps kadhun tak */

export default MovieList; /** Aadhich export default kadh ani hey tak */
