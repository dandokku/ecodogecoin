import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";
import SwiperCore from "swiper";
import { GrNext, GrPrevious } from "react-icons/gr";

SwiperCore.use([Autoplay, EffectCoverflow, Navigation, Pagination]);

function RoadMap() {
  const swiperRef = React.useRef(null);

  const handleNextClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
      swiperRef.current.swiper.slideNext();
    }
  };

  const handlePrevClick = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.autoplay.start();
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <Swiper
      ref={swiperRef}
      effect={"coverflow"}
      centeredSlides={true}
      loop={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      pagination={{ el: ".swiper-pagination", clickable: true }}
      navigation={{
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        clickable: true,
      }}
      modules={[EffectCoverflow, Pagination, Navigation]}
      className="swiper_container"
      allowTouchMove={false}
      autoplay={{ delay: 9000 }}
    >
      <SwiperSlide>welp</SwiperSlide>

      <SwiperSlide>welp</SwiperSlide>

      <SwiperSlide>welp</SwiperSlide>

      <div className="slider-controler">
        <div
          className="swiper-button-prev slider-arrow"
          onClick={handlePrevClick}
        >
          <GrPrevious color="white" />
        </div>
        <div
          className="swiper-button-next slider-arrow"
          onClick={handleNextClick}
        >
          <GrNext color="white" />
        </div>
      </div>
    </Swiper>
  );
}

export default RoadMap;

// <Swiper
//   navigation={true}
//   pagination={{ clickable: true }}
//   modules={[Navigation, Pagination]}
//   className="mySwiper"
// >
//   <SwiperSlide className="flex items-center justify-center bg-blue-500 text-white h-64">Slide 1</SwiperSlide>
//   <SwiperSlide className="flex items-center justify-center bg-green-500 text-white h-64">Slide 2</SwiperSlide>
//   <SwiperSlide className="flex items-center justify-center bg-red-500 text-white h-64">Slide 3</SwiperSlide>
//   <SwiperSlide className="flex items-center justify-center bg-yellow-500 text-white h-64">Slide 4</SwiperSlide>
// </Swiper>
