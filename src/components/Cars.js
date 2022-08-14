import {useState, useEffect} from "react"
import axios from "axios"

function Cars() {

    useEffect(() => {
        fetch("https://my.api.mockaroo.com/cars.json?key=9b52d4c0")
        .then(response => response.json())
        .then(carsInfo => setAllCars(carsInfo))

    },[])

    const [allCars, setAllCars] = useState([])
    console.log(allCars)
    return(
        <div>

        </div>
    )
}

export default Cars 