import React from "react";
import { Data } from "./Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./testmonial.css";
const Testmonials = () => {
  return (
    <section className="testmonial container section" id="testmonial">
      <h2 className="section_title">Testimonial</h2>
      <span className="section_subtitle">My Colleagues say</span>
      <Swiper
        className="testmonial_container"
        loop={true}
        grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          },
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testmonial_card" key={id}>
              <img src={image} alt={title} className="testmonial_img" />
              <h3 className="testmonial_name">{title}</h3>
              <p className="testmonial_description">{description}</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testmonials;
