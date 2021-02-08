import "./MovieAdd.scss";
import React from "react";
import MovieEditForm from "../../Shared/Components/MovieEditForm";

const MovieAdd = () => {
  return (
    <div className="movie__add mx-auto mt-5">
      <MovieEditForm isAddNewForm={true} />
    </div>
  );
};

export default MovieAdd;
