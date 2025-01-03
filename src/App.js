import './App.css';
import Signup from './Components/Signup'
import Login from './Components/Login'
import ForgotPs2 from './Components/ForgotPs2'
import NewPs from './Components/NewPs'
import {
   BrowserRouter as Router,
     Route,
     Routes,
  } from "react-router-dom";

// import backgroundfinal from '../Images/backgroundfinal.jpeg'
import Homepage from './Components/Homepage'
 import React from "react";
import UserProfile from './Components/UserProfile';
import Songscreen from './Components/Songscreen';
import PsChanged from "./Components/PsChanged";

// import Header from "./Components/Header";
// import AlbumSlider from "./Components/AlbumSlider";
// import PopularSongs from "./Components/PopularSongs";

function App() {
  return (
    <>
    <Router>
    <Routes>
          <Route path="/UserProfile" element={<UserProfile/>}/>
          <Route path="/Songscreen" element={<Songscreen/>}/>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/PsChanged" element={<PsChanged/>}/>
          <Route path="/NewPs" element={<NewPs/>}/>
          <Route path="/signup"  element={<Signup/>}/>
          <Route path="/login"  element={<Login />}/>
          <Route path="/ForgotPs2" element={<ForgotPs2/>}/>
        </Routes>
    </Router>
    </>
  );
}

export default App;
