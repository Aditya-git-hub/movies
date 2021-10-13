import React from "react";
import { useSelector } from "react-redux"; /** He line add kar */

const MovieDetails = () => {
  /** movies remove kar */
  const movie = useSelector(
    (state) => state.selectedMovie
  ); /**He line add kar */
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
          </div>
        </div>
      </div>
    </>
  );
};

/** mapStateToProps kadhun tak */

export default MovieDetails; /** Aadhich export default kadh ani hey tak */
