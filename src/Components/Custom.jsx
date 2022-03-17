import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderNextArrow from "./NextArrow";
import SliderPrevArrow from "./PrevArrow";

const CustomSlider = ({ children }) => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    nextArrow: <SliderNextArrow />,
    prevArrow: <SliderPrevArrow />,
    responsive: [
      {
        breakpoint: 860,
        settings: {
          slidesToShow: 2.6,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
          // arrows: false,
        },
      },
      {
        breakpoint: 750,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          arrows: true,
          // arrows: false,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: true,
          // arrows: false,
        },
      },
    ],
  };
  return (
    <>
      <Slider {...settings}>{children}</Slider>
    </>
  );
};

export default CustomSlider;
