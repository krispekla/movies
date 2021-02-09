import "./MovieItem.scss";
import React from "react";
import { useHistory } from "react-router-dom";

const MovieItem = (props) => {
  const history = useHistory();

  function onItemClick() {
    history.push(`/movie/edit/${props.movie.id}`);
  }

  return (
    <div onClick={onItemClick} className="movie__item__wrapper shadow">
      {props.movie.img ? (
        <img src={props.movie.img} alt="lorem ipsum" />
      ) : (
        <img
          src={
            "https://drive.google.com/uc?export=view&id=1UmDM8t3LH9-Z43IkWqhLWYfpnuSUU1ML"
          }
          alt="lorem ipsum"
        />
      )}
      <div className="d-none d-lg-flex flex-column px-4 pt-3">
        <h4 className="mb-2">{props.movie.title}</h4>
        <p className="mb-auto">{props.movie.info}</p>
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
