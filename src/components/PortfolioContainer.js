import React, { useState } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';


export default function PortfolioContainer({currentPage, handlePageChange}) {
  currentPage = useState('Home');
 const setCurrentPage = useState('Home');
  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    return <About />;
  };

  handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <Home currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
