import "./MovieSingle.scss";
import React from "react";
import mockImg from "../../Assets/Images/discovery.jpg";

const MovieSingle = () => {
  return (
    <div className="movie__single mx-auto d-flex flex-column">
      <div className="img__wrapper">
        <img src={mockImg} alt="mock" />
      </div>
      <div className="title d-flex justify-content-between align-items-center mt-4">
        <h3 className="">Star Trek Discovery</h3>
        <div className="rating d-flex flex-column">
          <span className="rating__nb font-weight-bold">6/10</span>
          <h6 className="">rating</h6>
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
      <div className="d-flex justify-content-end">
        <button id="deleteButton" className="btn-danger mr-3">
          Delete
        </button>
        <button id="editButton" className="btn-primary">
          Edit
        </button>
      </div>
    </div>
  );
};

export default MovieSingle;
