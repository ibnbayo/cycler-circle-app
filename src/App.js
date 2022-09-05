import {useState} from 'react'
import Header from './components/Header.js'
import Footer from './components/Footer.js';
import Cars from './components/Cars.js'
// import ControlledCarousel from './components/ControlledCarousel'
import images from "./images";
import ImageSlider from "./imageSlider.js";
import NoSearch from './components/NoSearch.js';
import './App.css';

function App() {
  // const [carSource, setCarSource] = useState('https://www.cars-data.com/en/lamborghini')
  // console.log(carSource)
  const [play, setPlay] = useState("Lamborghini")

  return (
    <div className="App">
      <Header play={play} setPlay={setPlay}/>
      <ImageSlider images={images} play={play} setPlay={setPlay}/>
      <Cars  play={play} setPlay={setPlay}/>
      <NoSearch />
      <Footer/>
    </div>
  );
}

export default App;
