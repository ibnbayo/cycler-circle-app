import {useState, useEffect} from "react"
// import Slider from 'react-slick';
import axios from "axios"
import './Cars.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {AiFillStar} from "react-icons/ai"


function Cars({play,setPlay}) {

    const [carz, setCarz] = useState([])

    useEffect(() => {

        const options = {
            method: 'GET',
            url: 'https://all-cars.p.rapidapi.com/cars/',
            headers: {
              'X-RapidAPI-Key': 'c0d2e70417msh3bde3b7dbe9e25ap12748ejsncd1fe394742c',
              'X-RapidAPI-Host': 'all-cars.p.rapidapi.com'
            }
          }

        axios.request(options)
        .then(response => {
            setCarz([...response.data])
            console.log(response.data)

        }).catch(function (error) {
            console.error(error);
        })
    },[])
    
    console.log(carz)
    // console.log(carSource)

    // console.log(carz[0].source)

    // function checkCar(car){
    //     if (car.source === "https://all-cars.p.rapidapi.com/cars/toyota")
    //     return true
    //     else
    //     return false
    // }

    
    // const [allCars, setAllCars] = useState([])
    // console.log(allCars)
    return(
        <div className="cars">
            {carz
            
            .filter(car => car.source.includes(`${play}`) && !car.img.includes('no-image') && car.img.includes('_1'))
            .map(
                (filteredCar) => {
                    return (
                <div className="car-wrap" key={filteredCar.url/*carz.indexOf(car)*/}>
                    <img className="car-img" src={`${filteredCar.img}`} alt="car"/>
                    <div className="car-info">
                        <div className="car-details">
                            <div className="car-title">{filteredCar.title}</div>
                            <div className="car-price">${Math.floor(100 + Math.random() * 900)}00</div>
                        </div>
                        <div className="car-rating">
                            <div className="car-star"><AiFillStar /></div>
                            <div className="star-rating">{Math.floor(400 + Math.random() * 100)/100}</div>
                        </div>
                    </div>
                    {/* <div className="monthly-price">${Math.floor(100 + Math.random() * 900)}/Month Est.</div>
                    <div className="cash-down">${Math.floor(1+Math.random()*5)}000 Cash Down</div> */}
                </div>
                )
                    })
            }
        </div>
        
    )
}

export default Cars 