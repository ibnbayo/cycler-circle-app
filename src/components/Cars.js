import {useState, useEffect} from "react"
// import Slider from 'react-slick';
import axios from "axios"
import './Cars.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {AiFillStar} from "react-icons/ai"


function Cars({play, selectedValue}) {

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
    function setPrice(filteredObj){
        let titleLength = Math.floor(filteredObj.title.length/237)
        let imgLength = filteredObj.img.length
        let sourceLength = filteredObj.source.length*2
        let urlLength = filteredObj.url.length
        let number = titleLength + sourceLength + urlLength + imgLength
        if (filteredObj.img.includes("4")){
            number += 376
        } else if (filteredObj.img.includes("7")){
            number += 992
        }
        number *= 100
        filteredObj['price'] = number
        return filteredObj.price
    }
    function setRating(filteredObj){
        let titleLength = Math.floor(filteredObj.title.length/237)
        let sourceLength = filteredObj.source.length
        let urlLength = filteredObj.url.length
        let num = Math.floor(titleLength + sourceLength + urlLength)
        if (filteredObj.img.includes("32")){
            num -= 37
        } else if (filteredObj.img.includes("9")){
            num += 16
        }
        
        (filteredObj.img.includes("6"))? num = (num/100)+3: num = (num/100)+4
        if ( num>5 || num.toString().length>5){
            num = 4.98
        }
        filteredObj['rating'] = num
        return filteredObj.rating

    }
    // const [allCars, setAllCars] = useState([])
    // console.log(allCars)
    function checkSearch(){

    }
    return(
        <div className="cars">
            {carz
            .filter(car => car.title.includes(`${play}`) && !car.img.includes('no-image') && car.img.includes('_1'))
            .slice(0,27)
            .map(
                (filteredCar) => {
                    return (
                <div className="car-wrap" key={filteredCar.url/*carz.indexOf(car)*/}>
                    <img className="car-img" src={`${filteredCar.img}`} alt={`${filteredCar.title}`}/>
                    <div className="car-info">
                        <div className="car-details">
                            <div className="car-title">{filteredCar.title}</div>
                            <div className="car-price">{selectedValue}${setPrice(filteredCar)}</div>
                            {/* <div className="car-price">${Math.floor(100 + Math.random() * 900)}00</div> */}

                        </div>
                        <div className="car-rating">
                            <div className="car-star"><AiFillStar /></div>
                            <div className="star-rating">{setRating(filteredCar)}</div>
                            {/* <div className="star-rating">{Math.floor(400 + Math.random() * 100)/100}</div> */}

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