import React, { useState } from 'react';

function ContactForm(props) {
    const [input, setInput] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.random(Math.floor() * 1000),
            text: input,
        });

        setInput('');
    };

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    return !props.edit ? (
        <div>

        </div>
    ) : (
        <div>

        </div>
    );
}

export default ContactForm;