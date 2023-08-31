import React, { useState } from "react";
// import Productcard from "./productcard";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./showcasestyle.css";
import Cards from "./Showcaseapi";

const Showcase = () => {
  const [cardData, setCartData] = useState(Cards);
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
        {cardData.map((curElem) => {
          const { image1, image2 } = curElem;

          return (
            <>
              <SwiperSlide>
                <div class="card">
                  <div
                    class="first-content"
                    style={{
                      backgroundImage: `url(${image1}`,
                      backgroundPosition: "center",
                      backgroundSize: "240px",
                      backgroundPositionY: "0vh",
                      // backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                  <div
                    class="second-content"
                    style={{
                      backgroundImage: `url(${image2}`,
                      ackgroundPosition: "top",
                      backgroundSize: "300px",
                      backgroundPositionY: "-10vh",

                      // backgroundRepeat: "no-repeat",
                    }}
                  ></div>
                </div>
              </SwiperSlide>
              ;
            </>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Showcase;
