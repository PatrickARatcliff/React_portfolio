import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "subject") {
      setSubject(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (name.length < 1) {
      setErrorMessage("You must enter a name");
      return;
    }

    if (!validateEmail(email)) {
      setErrorMessage("Email is invalid");
      return;
    }

    if (subject.length < 1) {
      setErrorMessage("You must enter a subject");
      return;
    }

    if (message.length < 1) {
      setErrorMessage("You must enter a message");
      return;
    }

    setErrorMessage(`Thank you for the message, ${name}! If the default email app does not open, please contact me directly.`);

    launchEmailPlatform();

    resetForm();
  };

  const resetForm = () => {
    setName("");
    setSubject("");
    setEmail("");
    setMessage("");
  };

  const launchEmailPlatform = () => {
    const emailSubject = encodeURIComponent(subject);
    const emailBody = encodeURIComponent(
      `Name: ${name}\nSubject: ${subject}\nMessage: ${message}`
    );

    const mailtoLink = `mailto:pratcliff5@gmail.com?subject=${emailSubject}&body=${emailBody}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="container p-2" style={{}}>
      <div className="row">
        <section className="mb-4 pt-3 col-12">
          <div className="row mb-1">
            <div className="col-md-9 mb-0">
              <p className="text-center w-responsive mx-auto h6">
                Any questions? Please do not hesitate to contact me directly.
              </p>
            </div>
          </div>
          <div className="row mb-5">
            <div className="col-md-9 mb-md-0 mb-0">
              <form
                id="contact-form"
                name="contact-form"
                action="mail.php"
                method="POST"
                onSubmit={handleFormSubmit}
              >
                <div className="row">
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
                    </div>
                  </div>
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
                    </div>
                  </div>
                </div>
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
                    </div>
                  </div>
                </div>
                <div className="row">
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
                    </div>
                  </div>
                </div>
                <div className="text-center text-md-left my-3 d-grid gap-2">
                  <button
                    className="btn btn-primary btn-block col"
                    onClick={handleFormSubmit}
                  >
                    Send
                  </button>
                  <p className="error-text">{errorMessage}</p>
                </div>
                <div className="status mt-1"></div>
              </form>
            </div>
            <div className="col-sm-12 col-md-3 text-center">
              <ul className="list-unstyled mb-0">
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-geo-alt-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                  </svg>
                  <p>Aurora, CO 80012, USA</p>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-telephone-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                    />
                  </svg>
                  <p>+1.303.579.5842</p>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-envelope-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                  </svg>
                  <p>pratcliff5@gmail.com</p>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ContactForm;
