import "./Home.scss";
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import MovieService from "../../Services/MovieService";

import popularMovie from "../../Assets/Images/peaky-blinder-feature.jpg";
import MovieList from "./Components/MovieList/MovieList";
import Spinner from "react-bootstrap/Spinner";
import { createNotification } from "../../Shared/Components/Notification";

const Home = () => {
  const history = useHistory();
  const [movieList, setMovieList] = useState([]);
  const [movieCategoryCrime, setMovieCategoryCrime] = useState([]);
  const [movieCategoryDrama, setMovieCategoryDrama] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getAllMovies();
  }, []);

  useEffect(() => {
    setMovieByCategory();
  }, [movieList]);

  async function getAllMovies() {
    try {
      setIsLoading(true);
      const response = await MovieService.getAll();
      if (response.status === 200) {
        if (response.data.length > 0) {
          setMovieList(response.data);
          createNotification("success", "Movies finished loading");
        } else createNotification("info", "No movies found");
      }
    } catch (error) {
      createNotification("error", error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function setMovieByCategory() {
    let tempCategoryCrime = [];
    let tempCategoryDrama = [];

    movieList.forEach((movie) => {
      if (movie.genre === "Crime") tempCategoryCrime.push(movie);
      else if (movie.genre === "Drama") tempCategoryDrama.push(movie);
    });

    setMovieCategoryCrime(tempCategoryCrime);
    setMovieCategoryDrama(tempCategoryDrama);
  }

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
      {isLoading ? (
        <h2 className="mt-4 mx-auto">
          Movies are loading
          <Spinner
            className="ml-5"
            animation="grow"
            size="lg"
            variant="danger"
          />
        </h2>
      ) : (
        <div className="home__movie__list">
          <MovieList category="Popular" movies={movieList} />
          <MovieList category="Crime" movies={movieCategoryCrime} />
          <MovieList category="Drama" movies={movieCategoryDrama} />
        </div>
      )}
    </div>
  );
};

export default Home;
