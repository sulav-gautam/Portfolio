import React from "react";

const Profile = () => {
  return (
    <>
      <section id="profile">
        <div className="section__pic-container">
          <img
            id="logo"
            src="/profile-pic.png"
            alt="Sulav Gautam profile picture"
          />
        </div>
        <div className="section__text">
          <p className="section__text__p1">Hello, I'm</p>
          <h1 className="title">Sulav Gautam</h1>
          <p className="section__text__p2">Web Developer & Graphic Designer</p>
          <div className="btn-container">
            <a href="/resume.pdf" target="_blank">
              <button className="btn btn-color-2">Download CV</button>
            </a>
            <button
              className="btn btn-color-1"
              onClick={() => (window.location.href = "./#contact")}
            >
              Contact Info
            </button>
          </div>
          <div id="socials-container">
            <a href="https://www.linkedin.com/in/sulavgautam/" target="_blank">
              <img
                src="/linkedin.png"
                alt="My LinkedIn profile"
                className="icon"
              />
            </a>
            <a href="https://github.com/sulav-gautam" target="_blank">
              <img src="/github.png" alt="My Github profile" className="icon" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Profile;
