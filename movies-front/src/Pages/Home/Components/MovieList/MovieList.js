import "./MovieList.scss";
import React from "react";
import MovieItem from "../MovieItem/MovieItem";
import { Swiper, SwiperSlide } from "swiper/react";

const MovieList = (props) => {
  return (
    <div className="movie__list d-flex flex-column">
      <h3 className="my-4">{props.category}</h3>
      <div className="d-flex">
        <Swiper slidesPerView={3} scrollbar={{ draggable: true }}>
          <SwiperSlide>
            <MovieItem />
          </SwiperSlide>
          <SwiperSlide>
            <MovieItem />
          </SwiperSlide>
          <SwiperSlide>
            <MovieItem />
          </SwiperSlide>
          <SwiperSlide>
            <MovieItem />
          </SwiperSlide>
          <SwiperSlide>
            <MovieItem />
          </SwiperSlide>
          <SwiperSlide>
            <MovieItem />
          </SwiperSlide>
          <SwiperSlide>
            <MovieItem />
          </SwiperSlide>
          <SwiperSlide>
            <MovieItem />
          </SwiperSlide>
          <SwiperSlide>
            <MovieItem />
          </SwiperSlide>
          <SwiperSlide>
            <MovieItem />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default MovieList;
