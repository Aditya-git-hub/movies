export const selectMovie = (movie) => {
  return {
    type: "SELECTED_MOVIE",
    payload: movie,
  };
};

export const deleteMovie = (movie) => {
  return {
    type: "DELETE_MOVIE",
    payload: "abcd",
  };
};
