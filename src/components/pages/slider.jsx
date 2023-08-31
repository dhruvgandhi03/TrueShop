import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";
import Pictures from "./sliderapi";

const Slider = () => {
  const [picture, setpicture] = useState(Pictures);
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
        {picture.map((curElem) => {
          const { Sliderimage } = curElem;
          return (
            <>
              <SwiperSlide
                style={{
                  backgroundImage: `url(${Sliderimage})`,
                  backgroundPosition: "center",
                  backgroundSize: "160vh",
                }}
              >
                {/*  */}
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
