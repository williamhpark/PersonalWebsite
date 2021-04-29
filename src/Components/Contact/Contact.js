import React, { useState } from "react";
import emailjs from "emailjs-com";

import "./Contact.css";

const Contact = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [emailSent, setEmailSent] = useState(undefined);

  let contactName = "";
  let contactPhone = "";
  let contactEmail = "";
  let contactMessage = "";
  if (props.data) {
    contactName = props.data.name;
    contactPhone = props.data.phone;
    contactEmail = props.data.email;
    contactMessage = props.data.contactmessage;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_USER_ID
      )
      .then((result) => {
        if (
          result.status === 200 &&
          contactName !== "" &&
          contactEmail !== "" &&
          contactMessage !== ""
        ) {
          setDisabled(true);
          setEmailSent(true);
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
        } else {
          setDisabled(false);
          setEmailSent(false);
        }
      })
      .catch((err) => {
        console.log(err);
        setDisabled(true);
        setEmailSent(false);
      });
  };

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>

        <div className="ten columns">
          <p className="lead">{contactMessage}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form onSubmit={handleSubmit} id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="name">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  size="35"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  size="35"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  size="35"
                  id="subject"
                  name="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="message">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="5"
                  id="message"
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <div>
                {disabled ? (
                  <button className="submit-disabled" type="submit" disabled>
                    Submit
                  </button>
                ) : (
                  <button className="submit" type="submit">
                    Submit
                  </button>
                )}
              </div>
            </fieldset>
          </form>

          {emailSent === false && (
            <div id="message-warning">
              <i className="fa fa-times"></i>Error, please try again later.
            </div>
          )}
          {emailSent === true && (
            <div id="message-success">
              <i className="fa fa-check"></i>Your message was sent, thank you!
              <br />
            </div>
          )}
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Contact Info</h4>
            <p className="address">
              {contactName}
              <br />
              {contactEmail} <br />
              <span>{contactPhone}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
