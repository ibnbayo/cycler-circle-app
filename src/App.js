import {useState} from 'react'
import Header from './components/Header.js'
import Footer from './components/Footer.js';
import Cars from './components/Cars.js'
// import ControlledCarousel from './components/ControlledCarousel'
import images from "./images";
import ImageSlider from "./imageSlider.js";
import './App.css';

function App() {
  // const [carSource, setCarSource] = useState('https://www.cars-data.com/en/lamborghini')
  // console.log(carSource)
  const [play, setPlay] = useState("lamborghini")

  return (
    <div className="App">
      <Header/>
      <ImageSlider images={images} play={play} setPlay={setPlay}/>
      <Cars  play={play} setPlay={setPlay}/>
      <Footer/>
    </div>
  );
}

export default App;
