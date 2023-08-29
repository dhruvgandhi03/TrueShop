import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

const Slider = () => {
  return (
    <div className="slideContainer">
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="sliderSwiper"
      >
        <SwiperSlide>
          <img
            src="https://plus.unsplash.com/premium_photo-1673329273026-2199d44d9bf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=100"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1603808033587-935942847de4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2xvdGhpbmclMjBhZHZlcnRpc2V8ZW58MHwwfDB8fHww&auto=format&fit=crop&w=1800&q=100"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1574120153654-453fb26e6bd4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fGNsb3RoaW5nJTIwYWR2ZXJ0aXNlfGVufDB8MHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1800&q=100"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.unsplash.com/photo-1612029266697-15ba0130eae8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM0fHxjbG90aGluZyUyMGFkdmVydGlzZXxlbnwwfDB8MHx8fDA%3D&auto=format&fit=crop&w=3070&q=100"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
