import {useState} from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import "./style.css"
import React from 'react'



function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey", borderRadius: '50%' }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "grey", borderRadius: '50%', }}
      onClick={onClick}
    />
  );
}

  
const ImageSlider = ({images}) => {

  
  // const [sliderRef, setSliderRef] = useState(null)

  const settings = {
    slidesToShow: 10,
    slidesToScroll: 10,
    infinite: false,
    // arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: false,
  };
  return (
    <>
    <div className='second-bar'>
      <div className="imgslider">
      {/* <div className='controls'>
        <button onCLick={sliderRef?.slickPrev}>
          <AiOutlineLeftCircle />
        </button>
        <button onCLick={sliderRef?.slickNext}>
          <AiOutlineRightCircle />
        </button>
      </div> */}
        <Slider {...settings}>
          {images.map((item) => (
            <div className='car-icon' key={item.id}>
              <img src={item.src}  alt={item.alt} className='car-icon-img'/>
              <div className='car-icon-text'>{item.alt}</div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="filters">
          <div> Filters</div>
      </div>
    </div>
          </>
  )
}
export default ImageSlider;