import ContextProvider from './Context';
import './App.css';
import React, {useState, useEffect} from 'react';
import AppContextProvider , { usePokemonesConstext } from './Context'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navegation";

import Home from './Views/Home';
import Pizza from './Views/Pizza';
import Carrito from './Views/Carrito'


function App() {



  return (
    <div className="App">
              <BrowserRouter>
                <Navbar></Navbar>           
                        <Routes>
                            <Route path="/" element={<Home />} index/>
                            <Route path="/Carrito" element={<Carrito />} /> 
                            <Route path="/Pizza/:name" element={<Pizza />} /> 
                        </Routes>
              </BrowserRouter>
    </div>
  );
}

export default App;
