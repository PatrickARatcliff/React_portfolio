import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
return (
    <ul className="nav nav-tabs justify-content-center">
            <li className="nav-item">
                <a 
                className={currentPage === 'AboutMe' ? 'nav-link active bg-dark text-white' : 'nav-link'}
                style={{borderBottomColor: "transparent"}}
                /*aria-current="page"*/ 
                href="#AboutMe"
                onClick={() => handlePageChange('AboutMe')}
                >About
                </a>
            </li>
            <li className="nav-item">
                <a 
                className={currentPage === 'Portfolio' ? 'nav-link active bg-dark text-white' : 'nav-link'}
                style={{borderBottomColor: "transparent"}}
                href="#Portfolio"
                onClick={() => handlePageChange('Portfolio')}
                >Portfolio
                </a>
            </li>
            <li className="nav-item">
                <a 
                className={currentPage === 'Resume' ? 'nav-link active bg-dark text-white' : 'nav-link'}
                style={{borderBottomColor: "transparent"}}
                href="#Resume"
                onClick={() => handlePageChange('Resume')}
                >Resume
                </a>
            </li>
            <li className="nav-item">
                <a 
                className={currentPage === 'ContactForm' ? 'nav-link active bg-dark text-white' : 'nav-link'}
                style={{borderBottomColor: "transparent"}}
                href="#Contact"
                onClick={() => handlePageChange('ContactForm')}
                /*aria-disabled="true"*/
                >Contact
                </a>
            </li>
        </ul>
);
}

export default NavTabs;
