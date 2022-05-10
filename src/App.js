import Home from './Pages/Home';
import About from './Pages/About';
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import './App.css';
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
    </div>
  );
}

export default App;
