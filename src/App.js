import Home from './Pages/Home';
import About from './Pages/About';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import React from 'react';
import Footer from './Components/Footer/Footer';
import About1 from './Components/About1/About1';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About1 />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
