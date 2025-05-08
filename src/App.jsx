import React from 'react';
import Headers from './Header/Header.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Hero from './components/Hero';
// import Stats from './components/Stats';
import './App.css';
import Body from './Body/Body.jsx';
import Stats from './Status/Stats.jsx';
import AboutUs from './AboutUs/AboutUs.jsx';
import Courses from './Courses/Courses.jsx';
import Testimonials from './Testimonials/Testimonials.jsx';
import Gallery from './Gallery/Gallery.jsx';
function App() {
  return (
   
      <div className="app">
         <BrowserRouter>
        <Headers />
        <Routes>
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        </BrowserRouter>
        <Body />
        <Stats />
        <AboutUs />
        <Courses />
        <Testimonials />
  
      </div>
   

  
  );
}

export default App;