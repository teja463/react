"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export function ImageSlider() {
  const settings = {
    dots: true,
  };
  console.log('from image slider')
  return (

    <div className="image-slider-container">
      <Slider {...settings}>
        <div>
          <img src="https://picsum.photos/id/237/200/300" />
        </div>
        <div>
          <img src="https://picsum.photos/id/237/200/300" />
        </div>
        <div>
          <img src="https://picsum.photos/id/237/200/300" />
        </div>
        <div>
          <img src="https://picsum.photos/id/237/200/300" />
        </div>
      </Slider>
    </div>
  );
}

