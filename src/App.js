import React from "react";
import './App.css';
import PortfolioContainer from "./components/PortfolioContainer";
import Navbar from './components/Navbar';
import Footer from './components/Footer'


// const App = () => {<PortfolioContainer />; 
//  <Nav />};

//export default App;



export default function App() {
    return (
      <div className="App">
        <Navbar />
        <PortfolioContainer />
        <Footer />
      </div>
    );
  }
  