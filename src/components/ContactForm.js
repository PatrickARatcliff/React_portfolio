import React, { useState } from 'react';

import { validateEmail } from '../utils/helpers';

function ContactForm() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {

        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if (inputType === 'name') {
            setName(inputValue);
        } else if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'subject') {
            setSubject(inputValue);
        } else {
            setMessage(inputValue);
        };

        // props.onSubmit({
        //     id: Math.random(Math.floor() * 1000),
        //     name: input,
        //     email: input,
        //     subject: input,
        //     message: input,
        // });

        // document.getElementById('contact-form').submit();

        // setInput('');
    };

    const handleFormSubmit = (e) => {

        e.preventDefault();

        if (name.length < 1) {
            setErrorMessage('You must enter a name');
            return;
        };

        if (!validateEmail(email)) {
            setErrorMessage('Email is invalid');
            return;
        };

        if (subject.length < 1) {
            setErrorMessage('You must enter a subject');
            return;
        };

        if (message.length < 1) {
            setErrorMessage('You must enter a message');
            return;
        };

        alert(`Thank you for the message ${name}!`);

        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
    };

    return (
        <div className="container vh-100 p-2" style={{maxWidth: "900px"}}>
            <div className='justify-content-center mx-3 row'>
                {/* <!--Section: Contact--> */}
                <section className="mb-4 pt-3 col-12">
                    {/* <!--Section heading--> */}
                    {/* <h2 className="h1-responsive font-weight-bold text-center my-4">Contact Me</h2> */}
                    {/* <!--Section description--> */}
                    <p className="text-center w-responsive mx-auto h6">Do you have any questions? Please do not hesitate to contact me directly.</p>
                    <div className="row mb-5">
                        {/* <!--Grid column--> */}
                        <div className="col-md-9 mb-md-0 mb-0">
                            <form id="contact-form" name="contact-form" action="mail.php" method="POST" onSubmit={handleFormSubmit}>
                                {/* <!--Grid row--> */}
                                <div className="row">
                                    {/* <!--Grid column--> */}
                                    <div className="col-md-6">
                                        <div className="md-form mb-3">
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                className="form-control"
                                                onChange={handleInputChange}
                                                placeholder="Your Name"
                                            ></input>
                                            {/* <label for="name" className="">Your name</label> */}
                                        </div>
                                    </div>
                                    {/* <!--Grid column--> */}
                                    {/* <!--Grid column--> */}
                                    <div className="col-md-6">
                                        <div className="md-form mb-3">
                                            <input
                                                type="text"
                                                id="email"
                                                name="email"
                                                className="form-control"
                                                onChange={handleInputChange}
                                                placeholder="Your email"
                                            ></input>
                                            {/* <label for="email" className="">Your email</label> */}
                                        </div>
                                    </div>
                                    {/* <!--Grid column--> */}
                                </div>
                                {/* <!--Grid row--> */}
                                {/* <!--Grid row--> */}
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-3">
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                className="form-control"
                                                onChange={handleInputChange}
                                                placeholder="Subject"
                                            ></input>
                                            {/* <label for="subject" className="">Subject</label> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <!--Grid row--> */}
                                {/* <!--Grid row--> */}
                                <div className="row">
                                    {/* <!--Grid column--> */}
                                    <div className="col-md-12">

                                        <div className="md-form">
                                            <textarea
                                                type="text"
                                                id="message"
                                                name="message"
                                                rows="2"
                                                className="form-control md-textarea"
                                                onChange={handleInputChange}
                                                placeholder="Your message"
                                            ></textarea>
                                            {/* <label for="message">Your message</label> */}
                                        </div>
                                    </div>
                                </div>
                                {/* <!--Grid row--> */}
                            </form>
                            <div className="text-center text-md-left my-3">
                                <button
                                    className="btn btn-primary btn-block col-3"
                                    onClick={handleFormSubmit}>Send</button>
                                <p className="error-text">{errorMessage}</p>
                            </div>
                            <div className="status"></div>
                        </div>
                        {/* <!--Grid column--> */}
                        {/* <!--Grid column--> */}
                        <div className="col-md-3 text-center">
                            <ul className="list-unstyled mb-0">
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                                </svg>
                                    <p>Aurora, CO 80012, USA</p>
                                </li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-telephone-fill" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                                </svg>
                                    <p>+1.303.579.5842</p>
                                </li>
                                <li><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                                </svg>
                                    <p>pratcliff5@gmail.com</p>
                                </li>
                            </ul>
                        </div>
                        {/* <!--Grid column--> */}
                    </div>
                </section>
                {/* <!--Section: Contact--> */}
            </div>
        </div>
    );
}

export default ContactForm;