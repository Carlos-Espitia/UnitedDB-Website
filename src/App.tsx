// import React from 'react';
import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Navbar from './components/navbar/navbar';
import Home from './pages/home';
import Docsapi from './pages/docsapi';
import Docsdbsx from './pages/docsbdsx';
import Docsberp from './pages/docsberp';



function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <main id="App">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/documentation/api" element={<Docsapi/>}/>
          <Route path="/documentation/berp" element={<Docsberp/>}/>
          <Route path="/documentation/bdsx" element={<Docsdbsx/>}/>


          {/* <Route path='*' element={<Home/>}/> // 404 page not found  */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
