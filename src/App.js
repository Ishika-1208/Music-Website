import './App.css';
import Signup from './Components/Signup'
import Login from './Components/Login'
import ForgotPs2 from './Components/ForgotPs2'
import {
   BrowserRouter as Router,
     Route,
     Routes,
  } from "react-router-dom";
  

function App() {
  return (
    <Router>
    <Routes>
          <Route path="/login"  element={<Login/>}/>
          <Route path="/signup"  element={<Signup />}/>
          <Route path="/ForgotPs2" element={<ForgotPs2/>}/>
        </Routes>
    </Router>
  );
}

export default App;
