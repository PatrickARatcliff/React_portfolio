import React, { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

import resume_page_1 from '../../images/resume1.jpeg';
import resume_page_2 from '../../images/resume2.jpeg';
import resume_page_3 from '../../images/resume3.jpeg';
import resume_page_4 from '../../images/resume4.jpeg';


function Resume() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="container align-middle p-2 bg-dark vh-100" style={{maxWidth: "750px", height: "100vh"}}>
            <div class="d-grid gap-2">
                <Button href="https://www.linkedin.com/in/patrickratcliff/" target="_blank" variant="primary" className='mx-1 text-light'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                </svg> LinkedIn</Button>
            </div>
            <div>
                <Carousel activeIndex={index} onSelect={handleSelect} variant="dark">
                    <Carousel.Item className="align-middle p-2">
                        <img
                            className="w-100 d-block"
                            src={resume_page_1}
                            alt="First page"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="align-middle p-2">
                        <img
                            className="d-block w-100"
                            src={resume_page_2}
                            alt="Second page"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="align-middle p-2">
                        <img
                            className="d-block w-100"
                            src={resume_page_3}
                            alt="Third page"
                        />
                    </Carousel.Item>
                    <Carousel.Item className="align-middle p-2">
                        <img
                            className="d-block w-100"
                            src={resume_page_4}
                            alt="Fourth slide: Team Profile Generator"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );

}

export default Resume;