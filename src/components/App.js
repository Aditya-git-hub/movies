import React from "react";
import Header from "./Header";
import { BrowserRouter, Route, Redirect } from "react-router-dom";
import MovieList from "./MovieList";
import MovieDetails from "./MovieDetails";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div>
        <Route path="/" exact component={MovieList} />
        <Route path="/movies/:title" exact component={MovieDetails} />
   
      </div>
    </BrowserRouter>
  );
};

export default App;
