import React, { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';

import resume_page_1 from '../../images/resume1.jpg';
import resume_page_2 from '../../images/resume2.jpg';
import resume_page_3 from '../../images/resume3.jpg';
import resume_page_4 from '../../images/resume4.jpg';


function Resume() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="container align-middle p-2 bg-dark vh-100" style={{maxWidth: "750px"}}>
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
    );

}

export default Resume;