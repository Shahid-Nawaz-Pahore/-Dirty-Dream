import React from 'react'
import { Route, Routes } from 'react-router';
import Home from "./pages/Home.jsx";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const App = () => {

  gsap.registerPlugin(useGSAP);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App;