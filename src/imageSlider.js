
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {BsFilter} from 'react-icons/bs'
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
    slidesToShow: 8,
    slidesToScroll: 4,
    infinite: false,
    // arrows: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dots: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
          
        }
      }
    ]
  };



  const changeCarSource = e => {
    let pickedIcon = e.target.alt
    console.log(pickedIcon)
    if (pickedIcon === undefined) {
      pickedIcon = e.target.textContent
    }
    console.log(pickedIcon)
    setPlay(pickedIcon)
  }

  // const buttonRef = useRef(null);
  // useEffect(() => {
  //   buttonRef.current.click();
  // }, []);

  return (
    <>
    <div className='second-bar sm:px-0' >
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
            <div className='car-icon hover:scale-90' onClick={changeCarSource}
             
             key={item.id}>

              <img src={item.src}
                alt={item.alt}
                // onClick={changeCarSource}
                 className='car-icon-img fill-blue-700 visible mx-auto'/>

              {/* <div onClick={changeCarSource} className='car-icon-img fill-blue-700 visible mx-auto'>
                {item.src} 
                 </div> */}

              <div className='car-icon-text pl-2 font-light cursor-pointer'>{item.alt}</div>
              
            </div>
          ))}
        </Slider>
      </div>
      <div className="filters d-flex">
           <div><BsFilter/></div> <div>Filters</div>
      </div>
    </div>
          </>
  )
}
export default ImageSlider;