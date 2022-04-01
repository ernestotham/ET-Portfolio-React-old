import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import About from '../src/components/pages/about';
import Work from '../src/components/pages/work'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Resume from './components/pages/resume';


ReactDOM.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<About />} />
    <Route path="/about" element={<About />} />
    <Route path="/work" element={<Work />} />
    <Route path="/resume" element={<Resume />} />
   
  </Routes>
  <Footer/>
</BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();