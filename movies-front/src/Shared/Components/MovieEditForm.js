import "./MovieEditForm.scss";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import ReactSlider from "react-slider";

function MovieEditForm(props) {
  const { register, handleSubmit, errors, setValue } = useForm();

  const [rating, setRating] = useState(6);

  useEffect(() => {
    if (props.isAddNewForm) {
      setValue("genre", "Drama");
      setValue("rated", "G");
    } else {
      setValue("title", props.movie.title);
      setValue("info", props.movie.info);
      setValue("genre", props.movie.genre);
      setValue("rated", props.movie.rated);
      setRating(props.movie.rating);
    }
  }, []);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="movie__form__edit shadow-lg d-flex flex-column my-5 p-2 px-md-5">
      <h2 className="mx-auto mt-3 mb-4 text-uppercase">
        {props.isAddNewForm ? "Add New Movie" : "Movie Edit"}
      </h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <div className="d-flex flex-column mb-5">
          <label className="mb-3">Title</label>
          <input
            className="input-default"
            type="text"
            placeholder={"Enter title"}
            name="title"
            ref={register({
              required: "Title is required",
              minLength: {
                value: 5,
                message: "Title must exceed 5 characters",
              },
            })}
          />
          {errors.title && (
            <span className="text-error mt-2">{errors.title.message}</span>
          )}
        </div>
        <div className="d-flex flex-column mb-5">
          <label className="mb-3">Movie info</label>

          <textarea
            className="textarea-default"
            placeholder={"Enter movie description"}
            name="info"
            ref={register({
              required: "Movie info is required",
              minLength: {
                value: 15,
                message: "Movie info must exceed 15 characters",
              },
            })}
          ></textarea>
          {errors.info && (
            <span className="text-error mt-2">{errors.info.message}</span>
          )}
        </div>
        <div className="d-flex flex-column flex-md-row mb-5">
          <div className="d-flex flex-column mb-5 mb-md-0 mr-md-5">
            <label className="mb-3">Genre</label>
            <select
              className="select-default"
              name="genre"
              ref={register({ required: true })}
            >
              <option value="Drama">Drama</option>
              <option value="Comedy">Comedy</option>
              <option value="Crime">Crime</option>
            </select>
          </div>
          <div className="rated d-flex flex-column">
            <label className="mb-3">Rated</label>
            <div className="radio-group d-flex flex-row flex-wrap">
              <label className="radio-default mr-4">
                G
                <input
                  className="checkbox"
                  name="rated"
                  type="radio"
                  value="G"
                  ref={register({ required: true })}
                />
                <span className="checkmark"></span>
              </label>
              <label className="radio-default mr-4">
                PG
                <input
                  className="checkbox"
                  name="rated"
                  type="radio"
                  value="PG"
                  ref={register({ required: true })}
                />
                <span className="checkmark"></span>
              </label>
              <label className="radio-default mr-4">
                PG-13
                <input
                  className="checkbox"
                  name="rated"
                  type="radio"
                  value="PG-13"
                  ref={register({ required: true })}
                />
                <span className="checkmark"></span>
              </label>
              <label className="radio-default">
                R
                <input
                  className="checkbox"
                  name="rated"
                  type="radio"
                  value="R"
                  ref={register({ required: true })}
                />
                <span className="checkmark"></span>
              </label>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column mb-5">
          <label className="mb-3">Rating</label>

          <ReactSlider
            name="rating"
            marks
            className="horizontal-slider"
            markClassName="mark"
            thumbClassName="thumb"
            trackClassName="track"
            min={0}
            max={10}
            step={1}
            value={rating}
            renderThumb={(props, state) => (
              <div {...props}>{state.valueNow}</div>
            )}
            onChange={(val) => {
              setRating(val);
            }}
          />
        </div>
        <div className="d-flex justify-content-center justify-content-md-end mb-4">
          <button
            id="cancelBtn"
            type="submit"
            className="btn-primary shadow-lg mr-4"
          >
            Cancel
          </button>
          <button id="updateBtn" type="submit" className="btn-danger shadow-lg">
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default MovieEditForm;
