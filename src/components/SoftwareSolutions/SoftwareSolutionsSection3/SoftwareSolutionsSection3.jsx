import "./SoftwareSolutionsSection3.css";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const SoftwareSolutionsSection3 = () => {
  return (
    <div className="softwaresolutionssection3">
      <div className="software-header">
        <h1>Beat the blank canvas with Templates</h1>
        <h2>
          Ready-to-use Templates for product specs, company handbooks, meeting
          notes and more.
        </h2>
      </div>
      <Swiper
        slidesPerView={5}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="../../../assets/code2.png "></img>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SoftwareSolutionsSection3;
