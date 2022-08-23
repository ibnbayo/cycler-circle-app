import {useState, useEffect} from "react"
import axios from "axios"
import './Cars.css'

const options = {
    method: 'GET',
    url: 'https://all-cars.p.rapidapi.com/cars/mazda',
    headers: {
      'X-RapidAPI-Key': 'c0d2e70417msh3bde3b7dbe9e25ap12748ejsncd1fe394742c',
      'X-RapidAPI-Host': 'all-cars.p.rapidapi.com'
    }
  }

function Cars() {
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
            {carz.map((car) => (
                <div className="car-wrap" key={carz.indexOf(car)}>
                    <img className="car-img" src={`${car.img}`}/>
                    <div className="car-title">{car.title}</div>
                </div>
            ))}
            
    
        </div>
    )
}

export default Cars 