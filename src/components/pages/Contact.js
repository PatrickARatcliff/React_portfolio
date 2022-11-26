import React, { useState } from 'react';
import ContactForm from '../ContactForm';

function Contact(props) {
    const [edit, setEdit] = useState({
        id: null,
        value: '',
    });

    console.log(props.contact);

    const submitContact = (value) => {

    };

    return (() => (
        <div>
            {/* <h3>Contact Me</h3> */}
            <ContactForm onSubmit={submitContact} />
        </div>
    ));
}

export default Contact;

