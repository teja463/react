"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ClientRoute() {
  const settings = {
    dots: true,
  };
  return (
    <>
      <div>Client Route</div>
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
    </>
  );
}
