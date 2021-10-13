import { combineReducers } from "redux";
import { myObj } from "../constants/movieDB";

const { movies } = myObj;

const movieReducer = () => {
  return movies;
};

const selectedMovieReducer = (selectedMovie = null, action) => {
  if (action.type === "SELECTED_MOVIE") {
    return action.payload;
  }
  return selectedMovie;
};

export default combineReducers({
  movies: movieReducer,
  selectedMovie: selectedMovieReducer,
});
