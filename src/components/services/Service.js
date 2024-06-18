import React, { useState } from "react";
import "./service.css";

const Service = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="services">
      <h2 className="section_title">Services</h2>
      <span className="section_subtitle">I can able to work</span>
      <div className="services_container content grid">
        <div className="services_content">
          <div>
            <i className="uil uil-web-grid services_icon"></i>
            <h3 className="services_title">
            Front-End  <br /> Developer
            </h3>
          </div>
          <span className="services_button" onClick={() => toggleTab(1)}>
            view more
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 1
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_modal-close"
              ></i>
              <h3 className="services_modal-title"> Front-End Developer</h3>
              <p className="services_modal-description">
             I am a skilled Front-End Developer with 1 plus years of experience in designing and developing 
              user interfaces for web applications. Proficient in HTML5, CSS3/SASS, JavaScript
              and modern JavaScript frameworks like React.js. Strong understanding of
               responsive design principles and experience in creating responsive web applications.
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                  Developed and maintained responsive web applications using HTML5, CSS3/SASS and JavaScript.
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Implemented front-end logic using modern JavaScript frameworks/libraries like React.js, ensuring high performance and scalability.</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                  Integrated backend APIs to fetch and persist data, ensuring seamless data flow and application functionality.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services_content">
          <div>
            <i className="uil uil-arrow services_icon"></i>
            <h3 className="services_title">
            React Js  <br /> Developer
            </h3>
          </div>
          <span className="services_button" onClick={() => toggleTab(2)}>
            view more
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 2
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_modal-close"
              ></i>
              <h3 className="services_modal-title"> React Js Developer</h3>
              <p className="services_modal-description">
              Experienced React.js Developer with 1 plus years of hands-on experience in 
              designing, developing and maintaining responsive web applications using 
              React.js and related libraries/tools. Proficient in JavaScript, 
              HTML5, CSS3/SASS, and familiar with state management libraries such as 
              Redux or Context API. Strong understanding of front-end architecture and UI/UX principles.
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Developed responsive web applications using React.js, translating UI/UX designs into high-quality code.</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Utilized state management solutions like Redux or Context API to manage application state effectively.</p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">Collaborated closely with UI/UX designers, backend developers, and stakeholders to deliver user-friendly interfaces and features.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="services_content">
          <div>
            <i className="uil uil-edit services_icon"></i>
            <h3 className="services_title">
            Back-End  <br /> Developer
            </h3>
          </div>
          <span className="services_button" onClick={() => toggleTab(3)}>
            view more
            <i className="uil uil-arrow-right services_button-icon"></i>
          </span>
          <div
            className={
              toggleState === 3
                ? "services_modal active-modal"
                : "services_modal"
            }
          >
            <div className="services_modal-content">
              <i
                onClick={() => toggleTab(0)}
                className="uil uil-times services_modal-close"
              ></i>
              <h3 className="services_modal-title"> Back-End Developer</h3>
              <p className="services_modal-description">
              Dynamic Junior Back-End Developer with one year of hands-on
               experience in designing, developing and maintaining scalable 
               web applications and APIs. Worked on multi-vendor project, created multiple modules. Proficient in php, 
               CodeIgniter and MySQL, used MVC architecture pattern, with a solid understanding of server-side architecture and cloud 
               technologies
              </p>
              <ul className="services_modal-services grid">
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                  Assisted in designing and developing different modules using Php Language and 
                  CodeIgniter Frameworks/Libraries, used MySQL for DataBase, under senior guidance, ensuring adherence to coding standards and best practices.
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                  Contributed to database management tasks, including schema design, query optimization, and data migration using MySQL DataBase.
                  </p>
                </li>
                <li className="services_modal-service">
                  <i className="uil uil-check-circle services_modal-icon"></i>
                  <p className="services_modal-info">
                  Participated actively in Scrum ceremonies, including sprint planning, daily stand-ups and retrospective meetings, contributing to team efficiency and project delivery.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
