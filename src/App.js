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

 import Sidebar from "./Components/Sidebar";
import Header from "./Components/Header";
import AlbumSlider from "./Components/AlbumSlider";
import PopularSongs from "./Components/PopularSongs";

function App() {
  return (
    <>
    <Router>

    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <AlbumSlider />
        <PopularSongs />
      </div>
    </div>


    <Routes>
          <Route path="/" element={<Homepage/>}/>
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
