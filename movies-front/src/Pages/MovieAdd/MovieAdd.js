import "./MovieAdd.scss";
import React from "react";
import { Link } from "react-router-dom";
import MovieEditForm from "../../Shared/Components/MovieEditForm";

const MovieAdd = () => {
  return (
    <div className="movie__add mx-auto mt-5 fade-in">
      <Link className="mb-4 text-uppercase" to="/">
        Back
      </Link>
      <MovieEditForm isAddNewForm={true} />
    </div>
  );
};

export default MovieAdd;
