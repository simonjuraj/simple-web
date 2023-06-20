import logo from './logo.svg';
import Navbar from './components/Navbar'
import CardsGrid from './components/Cards'
import Character from './components/Character'
import Location from './components/Location'
import './App.css';
import { Route, Routes, Link } from "react-router-dom"


function App() {
  return (     
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/character/:id" element={<Character />} />
      <Route path="/location/:id" element={<Location />} />
    </Routes> 
  );
}

function Home() {
  return (
    <div>
      <Navbar/>
      <CardsGrid/>
    </div>
  );
}

function About() {
  return (
    <div>
      <Navbar/>
      <h2>About us</h2>
    </div>
  );
}

export default App;
