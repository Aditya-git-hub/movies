import { combineReducers } from "redux";
import { myObj } from "../constants/movieDB";

const { movies } = myObj;

const selectedMovieReducer = (initialState = movies, action) => {
  /** */
  switch (action.type) {
    case "MOVIE_LIST":
      return initialState;
    case "SELECTED_MOVIE":
      return action.payload;
    case "DELETE_MOVIE":
      return initialState.filter((movie) => movie.id !== action.payload);
    default:
      return initialState;
  }
};

export default combineReducers({
  selectedMovie: selectedMovieReducer,
});
