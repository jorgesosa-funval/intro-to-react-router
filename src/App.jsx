import React from 'react';
import { Routes, Route, Link } from "react-router";
import Home from './pages/Home';
import About from './pages/About';
import DetalleDeJuego from './pages/DetalleDeJuego';
import Juegos from './pages/Juegos';
export default function App() {
  return (
    <>
      <nav className='flex justify-end items-center h-16 bg-cyan-800 shadow-md'>
        <ul className='flex gap-4 px-4 font-semibold text-white'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/juegos">Juegos</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/juegos' element={<Juegos />} />
        <Route path='/juegos/:idJuego' element={<DetalleDeJuego />} />
      </Routes>

    </>
  )
}
