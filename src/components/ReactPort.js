import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Portfolio from './pages/Portfolio';
import ContactForm from './ContactForm';
import AboutMe from './pages/About';
import Resume from './pages/Resume';

import '../styles/ReactPort.css';

export default function ReactPort() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <ContactForm />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <>
      <header className="15vh">
        <div className="m-2 text-center">
          <h1 className="title-text">Patrick Ratcliff</h1>
        </div>
        {/* We are passing the currentPage from state and the function to update it */}
        <div>
          <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </div>
      </header>
      <main className="bg-dark" style={{ height: '87vh', width: '100vw', overflowY: 'scroll', overflowX: "hidden", display: 'flex', alignItems: 'center', justifyContent: 'center'
    //   , borderRadius: '5px' 
      }}>
        {/* Here we are calling the renderPage method which will return a component  */}
        <div className="text-white" 
        style={{ height: "100%", width: "100%" }} 
        >
          {renderPage()}
        </div>
      </main>
    </>
  );
}
