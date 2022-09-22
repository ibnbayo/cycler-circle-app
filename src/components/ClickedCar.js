import React from 'react'
import {useLocation, Link} from 'react-router-dom'
// import {useContext} from 'react'
// import ClickedCarContext from './ClickedCarContext.js'

import './assets/ClickedCar.css'

// function ClickedCar({selectedVehicle}){

//     // const bk = useContext(ClickedCarContext)
//     console.log(selectedVehicle)

//   return (
//     <div className='clicked-car'>
//         {/* <h3>{`${clickedVehicle.title}`}</h3> */}
//         <div> GHDHDK </div>
//     </div>
//   )
// }

// export default ClickedCar
const ClickedCar = (props) => {
  const location = useLocation();
  const state = location.state;
  console.log(state);
  console.log(props.clickedVehicle)

  return (
    <>
      <h1>This is ClickedCar page</h1>
      {state && (
        <div>
          <h3>Passed data:</h3>
          <p>Za title: {props.clickedVehicle.title}</p>
          <p>Le image: {props.clickedVehicle.img}</p>
          <p>La source: {props.clickedVehicle.source}</p>
        </div>
      )}
      <hr />
      <Link to="/">Go Home</Link>
    </>
  );
};

export default ClickedCar;