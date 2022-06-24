import React from 'react';
import './App.scss';
import Navbar from './components/navbar/navbar';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Downloads from './components/downloads/downloads';





function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <About/>
      <Downloads/>
    </div>
  );
}

export default App;
