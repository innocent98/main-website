import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimony from "../../../organisms/testimony/Testimony";
import "./testimonial.scss";
import { PiArrowCircleLeft } from "react-icons/pi";
import { PiArrowCircleRight } from "react-icons/pi";
import data from './testimonyData'



const CustomPrevArrow = (props) => (
 
    <PiArrowCircleLeft className="slick-prev" onClick={props.onClick}/>

);

const CustomNextArrow = (props) => (
  <PiArrowCircleRight className="slick-next" onClick={props.onClick}/>
);

const Testimonial = () => {
  let settings = {
    dots: false, 
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    prevArrow: <CustomPrevArrow />, 
    nextArrow: <CustomNextArrow />, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true
        }
      }
    ]
  };

  return (
 
    <div className="slider-container">
      <Slider {...settings}>
        {data.map(({ avatar, name, review }, index) => (
          <div key={index}>
            <Testimony 
              avatar={avatar}
              name={name}
              review={review}
            />
          </div>
        ))}
      </Slider>
    </div>

 
  );
};

export default  Testimonial;
