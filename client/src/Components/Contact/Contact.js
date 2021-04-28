import React, { useState } from "react";
import emailjs from "emailjs-com";

import "./Contact.css";

const Contact = (props) => {
  const [contactName, setContactName] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [contactSubject, setContactSubject] = useState("");
  const [contactMessage, setContactMessage] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [emailSent, setEmailSent] = useState(undefined);

  let name = "";
  let phone = "";
  let email = "";
  let message = "";
  if (props.data) {
    name = props.data.name;
    phone = props.data.phone;
    email = props.data.email;
    message = props.data.contactmessage;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contactName);
    console.log(contactEmail);
    console.log(contactSubject);
    console.log(contactMessage);
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
          setContactName("");
          setContactEmail("");
          setContactSubject("");
          setContactMessage("");
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
          <p className="lead">{message}</p>
        </div>
      </div>

      <div className="row">
        <div className="eight columns">
          <form onSubmit={handleSubmit} id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  size="35"
                  id="contactName"
                  name="contactName"
                  value={contactName}
                  onChange={(e) => setContactName(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="email"
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text"
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  value={contactSubject}
                  onChange={(e) => setContactSubject(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="15"
                  id="contactMessage"
                  name="contactMessage"
                  resize="vertical"
                  value={contactMessage}
                  onChange={(e) => setContactMessage(e.target.value)}
                  required
                ></textarea>
              </div>

              <div>
                <button className="submit" type="submit" disabled={disabled}>
                  Submit
                </button>
                {/* <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span> */}
              </div>
            </fieldset>
          </form>

          <div id="message-warning">Error</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
        </div>

        <aside className="four columns footer-widgets">
          <div className="widget widget_contact">
            <h4>Contact Info</h4>
            <p className="address">
              {name}
              <br />
              {email} <br />
              <span>{phone}</span>
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Contact;
