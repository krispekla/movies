import "./MovieSingle.scss";
// import mockImg from "../../Assets/Images/discovery.jpg";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieEditForm from "../../Shared/Components/MovieEditForm";
import MovieService from "../../Services/MovieService";
import { useParams } from "react-router";
import { useHistory } from "react-router-dom";

import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

import { createNotification } from "../../Shared/Components/Notification";

const MovieSingle = () => {
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [editToggle, setEditToggle] = useState(false);
  const [show, setShow] = useState(false);

  let { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getMovieById();
  }, []);

  async function getMovieById() {
    try {
      setIsLoading(true);
      const response = await MovieService.getById(id);
      if (response.status === 200) {
        createNotification("info", "Movie loaded");
        if (response.data.length > 0) setMovie(response.data[0]);
      }
    } catch (error) {
      createNotification("error", error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleCloseDeleteDialog() {
    setShow(false);
  }
  async function handleConfirmDeleteDialog() {
    setShow(false);
    try {
      setIsLoading(true);
      const response = await MovieService.remove(id);
      if (response.status === 200) {
        createNotification("success", "Succesfully removed movie");
        history.push("/");
      }
    } catch (error) {
      createNotification("error", error.message);
    } finally {
      setIsLoading(false);
    }
  }

  function handleEditCancel() {
    setEditToggle(false);
  }

  return (
    <div className="movie__single mx-auto d-flex flex-column shadow-lg fade-in ">
      <Link className="mb-4 text-uppercase" to="/">
        Back
      </Link>
      {isLoading ? (
        <h2 className="mt-4 mx-auto">
          Searching for movie
          <Spinner
            className="ml-5"
            animation="grow"
            size="lg"
            variant="danger"
          />
        </h2>
      ) : (
        <div>
          <div className="img__wrapper">
            {movie.img ? (
              <img src={movie.img} alt="lorem ipsum" />
            ) : (
              <img
                src={
                  "https://drive.google.com/uc?export=view&id=1UmDM8t3LH9-Z43IkWqhLWYfpnuSUU1ML"
                }
                alt="lorem ipsum"
              />
            )}
          </div>
          <div className="title d-flex flex-column flex-md-row justify-content-between align-items-start align-items-md-center mt-4">
            <h3 className="">{movie.title}</h3>
            <div className="rating d-flex align-items-end">
              <h6 className="mb-3 mr-3">rating</h6>
              <span className="rating__nb font-weight-bold mt-4 mt-md-0 mr-md-3">
                {movie.rating}/10
              </span>
            </div>
          </div>
          <p className="info mt-3 mb-4">{movie.info}</p>
          <div className="d-flex flex-column flex-md-row">
            <div className="genre mb-2 mb-md-0 mr-md-5 d-flex">
              <h4 className="mr-3 mt-1">genre:</h4>
              <span className="font-weight-bold">{movie.genre}</span>
            </div>
            <div className="rated mb-5 d-flex">
              <h4 className="mr-3 mt-1">rated:</h4>
              <span className="font-weight-bold">{movie.rated}</span>
            </div>
          </div>
          {!editToggle && (
            <div className="d-flex justify-content-center justify-content-md-end">
              <button
                id="deleteButton"
                onClick={() => setShow(true)}
                className="btn-danger mr-3"
              >
                Delete
              </button>
              <button
                id="editButton"
                onClick={() => {
                  setEditToggle(!editToggle);
                }}
                className="btn btn-primary mr-md-3"
              >
                Edit
              </button>
            </div>
          )}
          {editToggle && (
            <MovieEditForm
              isAddNewForm={false}
              movie={movie}
              setEditCancel={handleEditCancel}
              setMovie={setMovie}
            />
          )}
        </div>
      )}

      <Modal
        show={show}
        onHide={handleCloseDeleteDialog}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Confirm - delete movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete movie?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseDeleteDialog}>
            Close
          </Button>
          <Button variant="danger" onClick={handleConfirmDeleteDialog}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default MovieSingle;
