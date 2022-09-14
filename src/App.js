import {useState} from 'react'
import Header from './components/Header.js'
import Footer from './components/Footer.js';
import Cars from './components/Cars.js'
// import ControlledCarousel from './components/ControlledCarousel'
import images from "./images";
import ImageSlider from "./imageSlider.js";
// import Dialog from './components/Dialog.js'
import './App.css';

function App() {
  // const [carSource, setCarSource] = useState('https://www.cars-data.com/en/lamborghini')
  // console.log(carSource)
  const [play, setPlay] = useState("Lamborghini")
  const [selectedValue, setSelectedValue] = useState({title: "United States dollar", symbol: "$", id: 6, acronym: "USD"});
  const [currencyData,setCurrencyData] = useState({})
  
  return (
    <div className="App">
      <Header play={play} setPlay={setPlay}/>
      <ImageSlider images={images} play={play} setPlay={setPlay}/>
      <Cars  play={play} setPlay={setPlay} selectedValue={selectedValue} currencyData={currencyData}/>
      <Footer
       selectedValue={selectedValue}
       setSelectedValue={setSelectedValue}
       currencyData={currencyData}
       setCurrencyData={setCurrencyData}
       />

    </div>
  );
}

export default App;
