import React, { useState } from 'react';

function ContactForm(props) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.random(Math.floor() * 1000),
            name: input,
            email: input,
            subject: input,
            message: input,
        });

        // document.getElementById('contact-form').submit();

        setInput('');
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return !props.edit ? (
        <div className='justify-content-center'>
            {/* <!--Section: Contact--> */}
            <section className="mb-4">
                {/* <!--Section heading--> */}
                <h2 className="h1-responsive font-weight-bold text-center my-4">Contact Me</h2>
                {/* <!--Section description--> */}
                <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact me directly.</p>
                <div className="row mx-5">
                    {/* <!--Grid column--> */}
                    <div className="col-md-9 mb-md-0 mb-5">
                        <form id="contact-form" name="contact-form" action="mail.php" method="POST" onSubmit={handleSubmit}>
                            {/* <!--Grid row--> */}
                            <div className="row">
                                {/* <!--Grid column--> */}
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            className="form-control"
                                            onChange={handleChange}
                                        ></input>
                                        <label for="name" className="">Your name</label>
                                    </div>
                                </div>
                                {/* <!--Grid column--> */}
                                {/* <!--Grid column--> */}
                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input
                                            type="text"
                                            id="email"
                                            name="email"
                                            className="form-control"
                                            onChange={handleChange}
                                        ></input>
                                        <label for="email" className="">Your email</label>
                                    </div>
                                </div>
                                {/* <!--Grid column--> */}
                            </div>
                            {/* <!--Grid row--> */}
                            {/* <!--Grid row--> */}
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form mb-0">
                                        <input
                                            type="text"
                                            id="subject"
                                            name="subject"
                                            className="form-control"
                                            onChange={handleChange}
                                        ></input>
                                        <label for="subject" className="">Subject</label>
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
                                            onChange={handleChange}
                                        ></textarea>
                                        <label for="message">Your message</label>
                                    </div>
                                </div>
                            </div>
                            {/* <!--Grid row--> */}
                        </form>
                        <div className="text-center text-md-left">
                            <button className="btn btn-primary" /*onclick="document.getElementById('contact-form').submit();"*/>Send</button>
                        </div>
                        <div className="status"></div>
                    </div>
                    {/* <!--Grid column--> */}
                    {/* <!--Grid column--> */}
                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>Aurora, CO 80012, USA</p>
                            </li>
                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                <p>303.579.5842</p>
                            </li>
                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p>pratcliff5@gmail.com</p>
                            </li>
                        </ul>
                    </div>
                    {/* <!--Grid column--> */}
                </div>
            </section>
            {/* <!--Section: Contact--> */}
        </div>
    ) : (
        <div>
            <h3>THANK YOU!</h3>
        </div>
    );
}

export default ContactForm;