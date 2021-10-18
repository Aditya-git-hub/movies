import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import { deleteMovie, selectList } from "../actions";

const MovieDetails = () => {
  const movie = useSelector((state) => state.selectedMovie);
  const dispatch = useDispatch();
  const history = useHistory();
  return (
    <>
      <div
        className="background"
        style={{ backgroundImage: `url(${movie.backgroundImageURL})` }}
      >
        <div className="blur-container">
          <img src={movie.url} alt="movie-poster" />
          <div className="movie-details">
            <h2 className="movie-heading">{movie.title}</h2>
            <ul className="list-one">
              <li>{movie.quality}</li>
              <li>{movie.language}</li>
            </ul>
            <ul className="list-two">
              <li>{movie.duration}</li>
              <li>{movie.genre}</li>
            </ul>
          </div>
          <div className="clear"></div>
        </div>
      </div>
      <div className="content-details">
        <div className="container">
          <div className="description">
            <h3 className="description-headding">About the movie</h3>
            <div className="description-content">{movie.about}</div>
            <button
              className="back"
              onClick={() => {
                history.goBack();
              }}
            >
              Go Back
            </button>
            <button
              className="delete"
              onClick={() => {
                dispatch(deleteMovie(`${movie.id}`));
                history.goBack();
              }}
            >
              Delete
            </button>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
