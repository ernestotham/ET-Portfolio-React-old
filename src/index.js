import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { HashRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar.js';
import Footer from './components/Footer.js';
import Resume from './components/pages/MyResume.js';
import About from './components/pages/about';
import Work from './components/pages/MyWork';


ReactDOM.render(
  <HashRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<About />} />
    <Route path="/about" element={<About />} />
    <Route path="/work" element={<Work />} />
    <Route path="/resume" element={<Resume />} />
    <Route path="ET-PORTFOLIO-REACT" element={<About />} />
   
  </Routes>
  <Footer/>
</HashRouter>,
  document.getElementById('root')
);

reportWebVitals();