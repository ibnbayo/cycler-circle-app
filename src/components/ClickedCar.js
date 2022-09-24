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
      {/* <h1></h1> */}
      { state && (
        <div className='mt-24 mx-20'>
         
          {/* <h3>.</h3> */}
          <p className='mx-auto'>Vehicle Make: {props.clickedVehicle.title}</p>
          <div><img src={props.clickedVehicle.img} alt='clicked car' className='rounded-md'/></div>
          {/* <p>La source: {props.clickedVehicle.rating}</p> */}
          <p>Price: {props.clickedVehicle.price}</p>
          <p className=''>Rating: {props.clickedVehicle.rating}</p>
        
        </div>
      )}
      <hr />
      <Link to="/"><div className='mt-5 mx-20 border-sky-400'>Go to Homepage</div></Link>
    </>
  );
};

export default ClickedCar;