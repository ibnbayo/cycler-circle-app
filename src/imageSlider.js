
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

  
const ImageSlider = ({images, play, setPlay}) => {


  const settings = {
    slidesToShow: 9,
    slidesToScroll: 9,
    infinite: false,
    // arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: false,
  };



  const changeCarSource = e => {
    setPlay(e.currentTarget.alt)
  }

  // const buttonRef = useRef(null);
  // useEffect(() => {
  //   buttonRef.current.click();
  // }, []);

  return (
    <>
    <div className='second-bar' >
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
            <div className='car-icon'
             
             key={item.id}>

              <img src={item.src}
                alt={item.alt}
                onClick={changeCarSource}
                 className='car-icon-img'/>

              <div className='car-icon-text'>{item.alt}</div>
              
            </div>
          ))}
        </Slider>
      </div>
      <div className="filters">
           Filters
      </div>
    </div>
          </>
  )
}
export default ImageSlider;