import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Portfolio from './pages/Portfolio';
import ContactForm from './ContactForm';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';


export default function ReactPort() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    // check for the value of `currentPage`
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
            <header className="min-vh-25">
                <div className="m-3 text-center">
                    <h1>Patrick Ratcliff</h1>
                </div>
                {/* We are passing the currentPage from state and the function to update it */}
                <div>
                    <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
                </div>
            </header>
            <main className="bg-dark h-100">
                {/* Here we are calling the renderPage method which will return a component  */}
                <div className="text-white" >
                    {renderPage()}
                </div>
            </main>
        </>
    );
}