import Home from './Pages/Home';
import About from './Pages/About';
import Quiz from "./Pages/Quiz";
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import './App.css';
import React from 'react';
import Footer from './Components/Footer/Footer';
import Learn from './Pages/Learn_Module';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Quiz" element={<Quiz/>}/>
        <Route path="LearnModule" element={<Learn/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
