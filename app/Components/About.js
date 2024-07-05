import React from "react";

const About = () => {
  return (
    <>
      <section id="about">
        <p className="section__text__p1">Get To Know More</p>
        <h1 className="title">About Me</h1>
        <div className="section-container">
          <div className="section__pic-container">
            <img
              src="/about-pic.jpg"
              alt="Profile picture"
              className="about-pic"
            />
          </div>
          <div className="about-details-container">
            <div className="about-containers">
              <div className="details-container">
                <img
                  src="/experience.png"
                  alt="Experience icon"
                  className="icon"
                />
                <h3>Experience</h3>
                <p>
                  2+ years <br />
                  Graphic Design
                  <br />
                  Web Development
                </p>
              </div>
              <div className="details-container">
                <img
                  src="/education.png"
                  alt="Education icon"
                  className="icon"
                />
                <h3>Education</h3>
                <p>
                  High School
                  <br />
                  Science
                </p>
              </div>
            </div>
            <div className="text-container">
              <p>
                Are you ready to enhance your online presence? I combine
                advanced full-stack development with captivating graphics to
                make your project stand out. My expertise includes web and app
                development, efficient engineering, and project management to
                ensure cutting-edge solutions are delivered seamlessly. In
                addition to coding, my passion for graphic design enables me to
                create visuals that captivate and engage. As a team player, I
                prioritize fostering a collaborative and positive environment,
                promoting innovation and open communication among team members.
                Mentoring aspiring developers has been a rewarding journey,
                allowing me to give back and shape the future of technology. I
                believe in cultivating a culture where everyone feels valued and
                motivated to contribute their best. Connect with me to bring
                your digital goals to life. Let's create something amazing
                together!
              </p>
            </div>
          </div>
        </div>
        <img
          src="/arrow.png"
          alt="Arrow icon"
          className="icon arrow"
          onClick={() => (window.location.href = "./#experience")}
        />
      </section>
    </>
  );
};

export default About;
