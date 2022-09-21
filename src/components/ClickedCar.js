import React from 'react'
import {useContext} from 'react'
import ClickedCarContext from './ClickedCarContext.js'

import './assets/ClickedCar.css'

function ClickedCar(){

    const bk = useContext(ClickedCarContext)
    console.log(bk)

  return (
    <div className='clicked-car'>
        {/* <h3>{`${clickedVehicle.title}`}</h3> */}
        <div> GHDHDK </div>
    </div>
  )
}

export default ClickedCar