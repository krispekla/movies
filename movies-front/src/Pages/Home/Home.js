import "./Home.scss";
import React from "react";
import { useHistory } from "react-router-dom";

import popularMovie from "../../Assets/Images/peaky-blinder-feature.jpg";
import MovieList from "./Components/MovieList/MovieList";

const Home = () => {
  const history = useHistory();

  return (
    <div className="home">
      <div className="home__header">
        <img src={popularMovie} alt="Peaky blinders" />
        <button
          onClick={() => history.push("/movie/add")}
          id="addBtn"
          className="btn-danger shadow-lg"
        >
          Add new movie
        </button>
      </div>
      <div className="home__movie__list">
        <MovieList category="Popular" />
        <MovieList category="Comedy" />
        <MovieList category="Drama" />
      </div>
    </div>
  );
};

export default Home;
