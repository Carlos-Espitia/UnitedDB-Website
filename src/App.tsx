// import React from 'react';
import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/navbar/navbar';
import Home from './pages/home';
import Docs from './pages/docs';



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <main id="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/documentation" element={<Docs/>}/>

          {/* <Route path='*' element={<Home/>}/> // 404 page not found  */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
