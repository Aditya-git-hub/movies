import { combineReducers } from "redux";
import { myObj } from "../constants/movieDB";

const { movies } = myObj;

const initialState = { movieList: movies, selectedmovie: {} };

const selectedMovieReducer = (state = initialState, action) => {
  /** */
  switch (action.type) {
    case "MOVIE_LIST":
      return state;
    case "SELECTED_MOVIE":
      return {
        ...state,
        selectedmovie: action.payload,
      };
    case "DELETE_MOVIE":
      return {
        ...state,
        movieList: state.movieList.filter(
          (movie) => movie.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default combineReducers({
  selectedMovie: selectedMovieReducer,
});
