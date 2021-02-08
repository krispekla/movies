import "./MovieSingle.scss";
import mockImg from "../../Assets/Images/discovery.jpg";
import React from "react";
import { Link } from "react-router-dom";
import MovieEditForm from "../../Shared/Components/MovieEditForm";

const MovieSingle = () => {
  return (
    <div className="movie__single mx-auto d-flex flex-column shadow-lg">
      <Link className="mb-4 text-uppercase" to="/">
        Back
      </Link>

      <div className="img__wrapper">
        <img src={mockImg} alt="mock" />
      </div>
      <div className="title d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mt-4">
        <h3 className="">Star Trek Discovery</h3>
        <div className="rating d-flex align-items-end">
          <h6 className="mb-2 mr-3">rating</h6>
          <span className="rating__nb font-weight-bold mt-4 mt-md-0 mr-md-3">
            6/10
          </span>
        </div>
      </div>
      <p className="info mt-3 mb-4">
        Follows the misadventures of four irreverent grade-schoolers in the
        quiet, dysfunctional town of South Park, Colorado.
      </p>
      <div className="d-flex flex-column flex-md-row">
        <div className="genre mb-2 mb-md-0 mr-md-5 d-flex">
          <h4 className="mr-3">genre:</h4>
          <span className="font-weight-bold">Sci-Fi</span>
        </div>
        <div className="rated mb-5 d-flex">
          <h4 className="mr-3">rated:</h4>
          <span className="font-weight-bold">PG</span>
        </div>
      </div>
      <div className="d-flex justify-content-center justify-content-md-end">
        <button id="deleteButton" className="btn-danger mr-3">
          Delete
        </button>
        <button id="editButton" className="btn-primary mr-md-3">
          Edit
        </button>
      </div>

      <MovieEditForm
        isAddNewForm={false}
        movie={{
          title: "Kris",
          info: "Info nesto",
          genre: "Drama",
          rated: "G",
          rating: 7,
        }}
      />
    </div>
  );
};

export default MovieSingle;
