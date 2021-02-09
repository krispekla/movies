import "./MovieList.scss";
import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import { Swiper, SwiperSlide } from "swiper/react";

const MovieList = (props) => {
  return (
    <div className="movie__list d-flex flex-column">
      <h3 className="my-4">{props.category}</h3>
      <div className="d-flex">
        {props.movies.length > 0 ? (
          <Swiper slidesPerView={3} scrollbar={{ draggable: true }}>
            {props.movies.map((item, index) => {
              return (
                <SwiperSlide key={index}>
                  <MovieItem movie={item} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        ) : (
          <h4>No movies found in this category</h4>
        )}
      </div>
    </div>
  );
};

export default MovieList;
