import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "./styles.css";


  import 'swiper/swiper.min.css'
 import 'swiper/modules/pagination/pagination.min.css'

// import required modules
import { Pagination, Navigation } from "swiper";

export default function Carrusel({image1, image2, image3, image4, image5}) {
    console.log(image1)
  return (
    <>
      <Swiper slidesPerView={1}
        spaceBetween={0}
        slidesPerGroup={1}
        loop={true}
        loopFillGroupWithBlank={false}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper" >
        <SwiperSlide><img src={image1} style={{position: 'relative'}}/></SwiperSlide>
        <SwiperSlide><img src={image2} /></SwiperSlide>
        <SwiperSlide><img src={image3} /></SwiperSlide>
        <SwiperSlide><img src={image4} /></SwiperSlide>
        <SwiperSlide><img src={image5} /></SwiperSlide>
      </Swiper>
    </>
  );
}
