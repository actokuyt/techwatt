"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useCertsFetchContext } from "@/contexts/fetch-contexts/certs-fetch-context";


export default function CertificationsCarousel() {
  const {certs} = useCertsFetchContext()
  const settings = {
    accessibility: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    centerPadding: "30px",
    mobileFirst: true,
    pauseOnHover: true,
    swipe:true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="mb-16 w-full md:w-[70%] mx-auto">
      <Slider {...settings}>
        {certs.map((cert, index) => {
          return (
            <div key={index} className="px-2">
              <img src={cert.imgsrc} alt={cert.title} className="mb-2 " />
              <h1 className="text-xl text-center font-semibold">{cert.title}</h1>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
