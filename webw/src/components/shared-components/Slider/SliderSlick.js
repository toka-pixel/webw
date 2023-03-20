import React from "react";
import Slider from "react-slick";
import "./SliderSlick.scss";

const SliderSlick = (props) => {
  const slider = React.useRef();

  const {
    slidesToShow,
    slidesToShowlaptop,
    slidesToShowtablet,
    slidesToShowmobile,
    children,
  
  } = props;

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1201,
        settings: {
          slidesToShow: slidesToShowlaptop,
          slidesToScroll: slidesToShowlaptop,
          initialSlide: slidesToShowlaptop,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: slidesToShowtablet,
          slidesToScroll: slidesToShowtablet,
          initialSlide: slidesToShowtablet,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: slidesToShowmobile,
          slidesToScroll: slidesToShowmobile,
        },
      },
    ],
  };



  return (
    <div>
  
      <Slider className={'slider'} ref={slider} {...settings}>
        {children}
      </Slider>
    </div>
  );
};

export default SliderSlick;
