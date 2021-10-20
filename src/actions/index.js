export const selectMovie = (movie) => {
  return {
    type: "SELECTED_MOVIE",
    payload: movie,
  };
};

export const deleteMovie = (index) => {
  return {
    type: "DELETE_MOVIE",
    payload: index,
  };
};

export const selectList = () => {
  return {
    type: "MOVIE_LIST",
  };
};
