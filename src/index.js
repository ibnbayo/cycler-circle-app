import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import { BrowserRouter } from 'react-router-dom'

// const ClickedCarContext = React.createContext()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// {Morning boss I went through your post(react-vehicle) and that of your GitHub I'm a react full stack dev,
// Regarding the code you've done a good job but there some things I  would like you to take note of
// 1.use HashRouter instead of Browser router in order not to develop a problem with your route in development.
// 2. Your routers tag, route tag, all should be wrapped inside router tag.
// Something like this
// <Router>
//             <Routes>
//                     <Route exact path="/" element={}/>
//                      <Route exact path="/secondRoute"              element={}/>
//              </Routes>
// </Router>
// 3. Also for the state i noticed your state are not changing I mean not changing from the initial value they were set to, Your setPlay,setSelectedValue,setCurrecyData should receive a value to change the set when used for example
// setPlay={setPlay("Toyota")}
// setSelectedValue={setSelectedValue ({...selectedValue , tittle:"Nigeria"})
// setCurrecyData={setCurrecyData({rate:"5.0",USD:5})}
// Also the css styling why don't you use the custom css i.e having a separate css file to make your code more simple}