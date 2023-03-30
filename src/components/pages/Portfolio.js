import React, { useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';

import pristineClean from '../../images/pristine-clean.jpeg'
import HiKamp from '../../images/HiKamp.jpeg';
import superSnake from '../../images/super_snake.jpg'
import tech_blog from '../../images/tech_blog.jpeg';
import social_network_api from '../../images/social_network_api.jpeg';
import team_profile_gen from '../../images/team_profile_gen.jpeg';
import fetch_coin from '../../images/fetch_coin.jpeg';
import weather_dashboard from '../../images/weather_dashboard.jpeg';


function Portfolio() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <div className="container align-middle p-2 bg-dark" style={{ maxWidth: "650px", height: "75vh"}} >
            <Carousel activeIndex={index} onSelect={handleSelect} variant="dark" style={{ minHeight: "fit-content" }}>
            <Carousel.Item className="align-middle p-2" style={{ }}>
                    <img
                        className="d-block w-100 max-vh-75"
                        src={pristineClean}
                        alt="First slide: Pristine Clean MERN"
                        style= {{ objectFit: "contain" }}
                    />
                    <Carousel.Caption className="rounded bg-dark bg-opacity-75 text-light ">
                        <h3>Pristine Clean MERN</h3>
                        <h5>MongoDB/Express.js<br></br>React.js/Node.js</h5>
                        <p>AS owner of a commercial cleaning business<br></br>I WANT an application with tools and info necessary for various positions<br></br>SO THAT I can manage with an SPA</p>
                        <a href="https://github.com/stevecalla/pristine-clean-v2" target="_blank" role="button" className="btn btn-info m-1">GitHub Repo</a>
                        <a href="https://pristine-clean.herokuapp.com/" target="_blank" role="button" className="btn btn-info m-1">Heroku App</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="align-middle p-2">
                    <img
                        className="w-100 d-block max-h-50"
                        src={HiKamp}
                        alt="Second slide: HiKamp MVC"
                        style= {{ objectFit: "contain" }}
                    />
                    <Carousel.Caption className="rounded bg-dark bg-opacity-75 text-light ">
                        <h3>HiKamp MVC</h3>
                        <h5>Node/Express/SQL<br></br>Sequelize/Handlebars</h5>
                        <p>Interactive app allows a user to easily search campgrounds within the United States National Park Service</p>
                        <a href="https://github.com/stevecalla/hiKamp" target="_blank" role="button" className="btn btn-info m-1">GitHub Repo</a>
                        <a href="https://hikamp.herokuapp.com/" target="_blank" role="button" className="btn btn-info m-1">Heroku App</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="align-middle p-2">
                    <img
                        className="d-block w-100 vh-80"
                        src={superSnake}
                        alt="Third slide: Super Snake"
                        style= {{ objectFit: "contain" }}
                    />
                    <Carousel.Caption className="rounded bg-dark bg-opacity-75 text-light">
                        <h3>Super Snake</h3>
                        <h5>p5.js</h5>
                        <p>Simple, entertaining, aesthetically and aubibly pleasing snake game!</p>
                        <a href="https://github.com/PatrickARatcliff/super_snake" target="_blank" role="button" className="btn btn-info m-1">GitHub Repo</a>
                        <a href="https://patrickaratcliff.github.io/super_snake/">GitHub Pages</a>
                        <a href="https://editor.p5js.org/PatrickARatcliff/full/0oFubilss" target="_blank" role="button" className="btn btn-info m-1">p5.js</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="align-middle p-2">
                    <img
                        className="d-block w-100 vh-80"
                        src={tech_blog}
                        alt="Fourth slide: Tech Blog MVC"
                        style= {{ objectFit: "contain" }}
                    />
                    <Carousel.Caption className="rounded bg-dark bg-opacity-75 text-light">
                        <h3>Tech Blog MVC</h3>
                        <h5>Node/Express/SQL<br></br>Sequelize/Handlebars</h5>
                        <p>CMS-style blog site, where developers can publish their blog posts and comment on other developers’ posts</p>
                        <a href="https://github.com/PatrickARatcliff/m14c-MVC-tech_blog" target="_blank" role="button" className="btn btn-info m-1">GitHub Repo</a>
                        <a href="https://m14c-mvc-techblog.herokuapp.com/" target="_blank" role="button" className="btn btn-info m-1">Heroku App</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="align-middle p-2">
                    <img
                        className="d-block w-100 vh-50"
                        src={social_network_api}
                        alt="Fifth slide: Social Network API"
                        style= {{ objectFit: "contain" }}
                    />
                    <Carousel.Caption className="rounded bg-light bg-opacity-75 text-dark">
                        <h3>Social Network API</h3>
                        <h5>Express/MongoDB<br></br>Mongoose ODM</h5>
                        <p> API for a social network web application allows users to share thoughts, react to friends thoughts, and create a friends list</p>
                        <a href="https://github.com/PatrickARatcliff/m18c-social_network_api" target="_blank" role="button" className="btn btn-info mx-1">GitHub Repo</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="align-middle p-2">
                    <img
                        className="d-block w-100 vh-80"
                        src={team_profile_gen}
                        alt="Sixth slide: Team Profile Generator"
                        style= {{ objectFit: "contain" }}
                    />
                    <Carousel.Caption className="rounded bg-dark bg-opacity-75 text-light">
                        <h3>Team Profile Generator</h3>
                        <h5>Node/Inquirer/Jest</h5>
                        <p>Using node command prompts from the terminal/bash , the user can generate a homepage (html) for their project team</p>
                        <a href="https://github.com/PatrickARatcliff/m10c-team_profile_generator" target="_blank" role="button" className="btn btn-info mx-1">GitHub Repo</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="align-middle p-2">
                    <img
                        className="d-block w-100 vh-80"
                        src={fetch_coin}
                        alt="Seventh slide: Fetch Coin"
                        style= {{ objectFit: "contain" }}
                    />
                    <Carousel.Caption className="rounded bg-dark bg-opacity-75 text-light">
                        <h3>Fetch Coin</h3>
                        <h5>3rd Party API</h5>
                        <p>Quickly find status, basic information, and news for crypto coins</p>
                        <a href="https://github.com/PatrickARatcliff/k5-project1-finance_info" target="_blank" role="button" className="btn btn-info m-1">GitHub Repo</a>
                        <a href="https://patrickaratcliff.github.io/k5-project1-finance_info/" target="_blank" role="button" className="btn btn-info m-1">GitHub Pages</a>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className="align-middle p-2">
                    <img
                        className="d-block w-100 vh-80"
                        src={weather_dashboard}
                        alt="Eighth slide: Weather Dashboard"
                        style= {{ objectFit: "contain" }}
                    />
                    <Carousel.Caption className="rounded bg-dark bg-opacity-75 text-light">
                        <h3>Weather Dashboard</h3>
                        <h5>3rd Party API</h5>
                        <p>Quickly find weather, basic information for a given city</p>
                        <a href="https://github.com/PatrickARatcliff/m6c-weather_app" target="_blank" role="button" className="btn btn-info m-1">GitHub Repo</a>
                        <a href="https://patrickaratcliff.github.io/m6c-weather_app/" target="_blank" role="button" className="btn btn-info m-1">GitHub Pages</a>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Portfolio;
