import React from "react";
import Productcard from "./productcard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./showcasestyle.css";

const Showcase = () => {
  return (
    <div className="showcase">
      <Swiper
        defaultValue={4}
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="showcaseSwiper"
      >
        <SwiperSlide>
          <Productcard />
        </SwiperSlide>
        <SwiperSlide>
          <Productcard />
        </SwiperSlide>
        <SwiperSlide>
          <Productcard />
        </SwiperSlide>
        <SwiperSlide>
          <Productcard />
        </SwiperSlide>
        <SwiperSlide>
          <Productcard />
        </SwiperSlide>
        <SwiperSlide>
          <Productcard />
        </SwiperSlide>
        <SwiperSlide>
          <Productcard />
        </SwiperSlide>
        <SwiperSlide>
          <Productcard />
        </SwiperSlide>
        <SwiperSlide>
          <Productcard />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Showcase;
