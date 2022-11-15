import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
return (
    <ul className="nav nav-tabs">
            <li className="nav-item">
                <a 
                className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
                /*aria-current="page"*/ 
                href="#AboutMe"
                onClick={() => handlePageChange('AboutMe')}
                ><h3>About Me</h3>
                </a>
            </li>
            <li className="nav-item">
                <a 
                className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                href="#Portfolio"
                onClick={() => handlePageChange('Portfolio')}
                ><h3>Portfolio</h3>
                </a>
            </li>
            <li className="nav-item">
                <a 
                className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
                href="#Resume"
                onClick={() => handlePageChange('Resume')}
                ><h3>Resume</h3></a>
            </li>
            <li className="nav-item">
                <a 
                className={currentPage === 'ContactForm' ? 'nav-link active' : 'nav-link'}
                href="#Contact"
                onClick={() => handlePageChange('ContactForm')}
                /*aria-disabled="true"*/
                ><h3>Contact Me</h3>
                </a>
            </li>
        </ul>
);
}

export default NavTabs;
