import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import NavbarComp from './components/NavbarComp';
import Reg from './components/Reg';
import About from './components/About';
import Offer from './components/offers';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Reg" element={<Reg />} />
          <Route path="/Offer" element={ <Offer />} />
          <Route path="/" element={ <NavbarComp />} />
          <Route path="/Contact" element ={ <Contact />} />
          <Route path="/About" element ={ <About />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;