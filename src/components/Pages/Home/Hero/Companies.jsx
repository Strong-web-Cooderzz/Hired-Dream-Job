import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Pagination } from "swiper";

export default function Companies() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        //Responsive breakpoints
        breakpoints={{
          440: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 6,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src="https://superio-next.vercel.app/images/clients/1-4.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://superio-next.vercel.app/images/clients/1-5.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://superio-next.vercel.app/images/clients/1-6.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://superio-next.vercel.app/images/clients/1-7.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://superio-next.vercel.app/images/clients/1-1.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://superio-next.vercel.app/images/clients/1-2.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://superio-next.vercel.app/images/clients/1-7.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src="https://superio-next.vercel.app/images/clients/1-4.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
