import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import Nav from './components/Nav';

// const App = () => {<PortfolioContainer />; 
//  <Nav />};

//export default App;



export default function App() {
    return (
      <div>
        <Nav />
        <PortfolioContainer />
      </div>
    );
  }
  