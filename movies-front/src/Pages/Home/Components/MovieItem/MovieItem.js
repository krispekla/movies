import "./MovieItem.scss";
import React from "react";
import mockImg from "../../../../Assets/Images/discovery.jpg";

const MovieItem = () => {
  return (
    <div className="movie__item__wrapper shadow">
      <img src={mockImg} alt="Peaky blinders" />
      <div className="d-none d-lg-flex flex-column px-4 pt-3">
        <h4 className="mb-2">Star Trek Discovery</h4>
        <p className="mb-auto">
          Follows the misadventures of four irreverent grade-schoolers in the
          quiet, dysfunctional town of South Park, Colorado.
        </p>
        <div className="d-flex justify-content-end align-items-end mt-4 ">
          <button id="editButton" className="btn-primary mt-2 shadow-lg">
            Click for details
          </button>
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
