import {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import logo from './components/assets/logo.svg';
import Favicon from 'react-favicon'
import Header from './components/Header.js'
import Footer from './components/Footer.js';
import Cars from './components/Cars.js'
import NoSearch from './components/NoSearch'
// import ControlledCarousel from './components/ControlledCarousel'
import images from "./images";
import ImageSlider from "./imageSlider.js";
import ClickedCar from './components/ClickedCar.js'
import { Link } from "react-router-dom";
// import { ClickedCarProvider } from './components/ClickedCarContext.js';
// import Dialog from './components/Dialog.js'
import './App.css';

function App() {
  // const [carSource, setCarSource] = useState('https://www.cars-data.com/en/lamborghini')
  // console.log(carSource)
  const [play, setPlay] = useState("Lamborghini")
  const [selectedValue, setSelectedValue] = useState({title: "United States dollar", symbol: "$", id: 6, acronym: "USD"});
  const [currencyData,setCurrencyData] = useState({"rates": {"USD": 1}})
  const [clickedVehicle, setClickedVehicle] = useState({})
    // img: "https://www.cars-data.com/pictures/thumbs/350px/mazda/mazda-mx-30_4576_1.jpg",
    // source: "https://www.cars-data.com/en/mazda",
    // title: "Mazda MX-30", 
    // url: "https://www.cars-data.com/en/mazda/mx-30",})
  console.log(clickedVehicle)
  return (
    <div className="App">
      <Favicon url={logo}></Favicon>
      <Header play={play} setPlay={setPlay}/>
      {/* <Router> */}
      {/* <ClickedCarProvider> */}
      <BrowserRouter>
      <Routes>
        <Route path='/'
          element={<>
            <ImageSlider images={images} play={play} setPlay={setPlay} />
            <Cars  play={play} setPlay={setPlay} selectedValue={selectedValue} 
              currencyData={currencyData}
              clickedVehicle={clickedVehicle}
              setClickedVehicle={setClickedVehicle}/>
          </>}/>
        <Route path = "/big" element={<ClickedCar clickedVehicle={clickedVehicle} />}/>
      </Routes>
      </BrowserRouter>
      {/* </ClickedCarProvider> */}
      {/* </Router> */}
      {/* <ImageSlider images={images} play={play} setPlay={setPlay}/>
      <Cars  play={play} setPlay={setPlay} selectedValue={selectedValue} currencyData={currencyData}/> */}
      {/* <Footer
       selectedValue={selectedValue}
       setSelectedValue={setSelectedValue}
       currencyData={currencyData}
       setCurrencyData={setCurrencyData}
       /> */}

    </div>
  );
}

export default App;
