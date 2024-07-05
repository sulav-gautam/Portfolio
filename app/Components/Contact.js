import React from "react";

const Contact = () => {
  return (
    <>
      {" "}
      <section id="contact">
        <p className="section__text__p1">Get in Touch</p>
        <h1 className="title">Contact Me</h1>
        <div className="contact-info-upper-container">
          <div className="contact-info-container">
            <img
              src="/email.png"
              alt="Email icon"
              className="icon contact-icon email-icon"
            />
            <p>
              <a href="mailto:gautamsulav000@gmail.com">
                gautamsulav000@gmail.com
              </a>
            </p>
          </div>
          <div className="contact-info-container">
            <img
              src="/linkedin.png"
              alt="LinkedIn icon"
              className="icon contact-icon"
            />
            <p>
              <a
                href="https://www.linkedin.com/in/sulavgautam/"
                target="_blank"
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
