import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

export default function App() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="text-black  p-3  "
      >
        <SwiperSlide className="text-gray-900 font-bold">
          <img
            className=" object-cover w-full"
            src="/images/surgery3x600.webp"
            alt="web surgery image"
          />
          <p className="font-bold text-gray-500 text-center mb-4"> </p>
        </SwiperSlide>
        <SwiperSlide className="text-gray-900 font-bold ">
          <img
            className=" object-fit w-full"
            src="/images/surgery1x600.webp"
            alt="web surgery image"
          />
          <p className="font-bold text-gray-500 text-center mb-4"> </p>
        </SwiperSlide>
        <SwiperSlide className="text-gray-900 font-bold">
          <img
            className="object-cover w-full"
            src="/images/surgery2x600.webp"
            alt="web surgery image"
          />
          <p className="font-bold text-gray-500 text-center mb-4"> </p>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
