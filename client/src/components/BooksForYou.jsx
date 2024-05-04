import React from "react";
import Books from "./Books";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const BooksForYou = () => {
  return (
    <div className="py-10 px-4 md:px-8">
      <h2 className="md:text-3xl text-[20px] pb-8 md:pb-16 md:pt-5 font-semibold text-center">
        Books For You
      </h2>

      <Swiper
        speed={1200}
        slidesPerView={1.5}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2.2,
            spaceBetween: 10,
          },
          900: {
            slidesPerView: 3.2,
            spaceBetween: 10,
          },
          1200: {
            slidesPerView: 4.1,
            spaceBetween: 20,
          },
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper max-w-[1440px] mx-auto"
      >
        <SwiperSlide>
          {" "}
          <Books />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Books />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Books />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Books />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Books />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Books />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Books />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Books />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Books />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Books />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BooksForYou;
