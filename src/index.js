import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Home from '../src/components/pages/home';
import About from '../src/components/pages/about';
import Work from '../src/components/pages/work'
import Navbar from './components/Navbar';
import Footer from './components/Footer'

ReactDOM.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<App />} />
    <Route path="/about" element={<About />} />
    <Route path="/work" element={<Work />} />
    <Route path="/home" element={<Home />} />
  </Routes>
  <Footer/>
</BrowserRouter>,
  document.getElementById('root')
);

reportWebVitals();