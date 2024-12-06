import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
import ForgotPs2 from './Components/ForgotPs2';
import NewPs from './Components/NewPs';
import Homepage from './Components/Homepage';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import React from "react";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/new-password" element={<NewPs />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPs2 />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
