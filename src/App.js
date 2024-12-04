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

// import Homepage from './Components/Homepage'
 import React from "react";

function App() {
  return (
    <Router>
    <Routes>
          <Route path="" element={<NewPs/>}/>
          <Route path="/signup"  element={<Signup/>}/>
          <Route path="/login"  element={<Login />}/>
          <Route path="/ForgotPs2" element={<ForgotPs2/>}/>
        </Routes>
    </Router>
  );
}

export default App;
