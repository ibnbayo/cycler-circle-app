import Header from './components/Header.js'
import Footer from './components/Footer.js';
import Cars from './components/Cars.js'
// import ControlledCarousel from './components/ControlledCarousel'
import images from "./images";
import ImageSlider from "./imageSlider.js";
import './App.css';

function App() {

  return (
    <div className="App">
      <Header/>
      <ImageSlider images={images}/>
      {/* <ControlledCarousel/> */}
      <Cars/>
      <Footer/>
    </div>
  );
}

export default App;
