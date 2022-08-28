import {useState, useEffect} from "react"
// import Slider from 'react-slick';
import axios from "axios"
import './Cars.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const options = {
    method: 'GET',
    url: 'https://all-cars.p.rapidapi.com/cars/mazda',
    headers: {
      'X-RapidAPI-Key': 'c0d2e70417msh3bde3b7dbe9e25ap12748ejsncd1fe394742c',
      'X-RapidAPI-Host': 'all-cars.p.rapidapi.com'
    }
  }

// const options = {
//   method: 'GET',
//   url: 'https://all-cars.p.rapidapi.com/cars/',
//   headers: {
//     'X-RapidAPI-Key': 'c0d2e70417msh3bde3b7dbe9e25ap12748ejsncd1fe394742c',
//     'X-RapidAPI-Host': 'all-cars.p.rapidapi.com'
//   }
// };

function Cars() {

    // const settings = {
    //     slidesToShow: 6,
    //     slidesToScroll: 2,
    //     autoplay: true,
    //     autoplaySpeed: 1500,
    //     variableWidth: true,
    //     infinite: true,
    //     arrows: true,
    //     dots: false,
    //     pauseOnHover: true,
    //     responsive: [{
    //       breakpoint: 768,
    //       settings: {
    //         slidesToShow: 4
    //       }
    //     }, {
    //       breakpoint: 520,
    //       settings: {
    //         slidesToShow: 2
    //       }
    //     }]
    //   };


    const [carz, setCarz] = useState([])

    useEffect(() => {
        axios.request(options)
        .then(response => {
            setCarz([...response.data])
            console.log(response.data)

        }).catch(function (error) {
            console.error(error);
        })
    },[])
    console.log(carz)


    // const [allCars, setAllCars] = useState([])
    // console.log(allCars)
    return(
        <div className="cars">
            {/* <Slider {...settings}>
            <div>
            <div>hjhfjfj</div>
            <div>jjfjfjfjfiooo4</div>
            <div>eqewerwr</div>
            </div>
            <div>
            <div>hjhfjfj</div>
            <div>jjfjfjfjfiooo4</div>
            <div>eqewerwr</div>
            </div>
                </Slider> */}

            {carz.map((car) => (
                <div className="car-wrap" key={carz.indexOf(car)}>
                    <img className="car-img" src={`${car.img}`} alt="car"/>
                    <div className="car-title">{car.title}</div>
                </div>
            ))}
            
    
        </div>
    )
}

export default Cars 