import React, { useState } from "react";
import "./qulification.css";

const Qulifications = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section" id="qualification">
      <h2 className="section_title">Qualification</h2>
      <span className="section_subtitle">My personel journey</span>
      <div className="qualification_container container">
        <div className="qualification_tabs">
          <div
            className={
              toggleState === 1
                ? "qualification_button qualification_active button--flex"
                : "qualification_button  button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap  qualification_icon"></i>
            Education
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification_button qualification_active button--flex"
                : "qualification_button  button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt  qualification_icon"></i>
            Experince
          </div>
        </div>
        <div className="qualification_sections">
          <div
            className={
              toggleState === 1
                ? "qualification_content qualification_content-active"
                : "qualification_content "
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">
                  Master of Science(Physics)
                </h3>
                <span className="qualification_subtitle">
                  Osmania University
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt calender-icon"></i>2013-2015
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">
                  Bachelor of Science(MPE)
                </h3>
                <span className="qualification_subtitle">
                  Nizam College-O.U
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt calender-icon"></i>2010-2013
                </div>
              </div>
            </div>
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Intermediate(MPC)</h3>
                <span className="qualification_subtitle">
                  Board of Intermediate Education Andhra Pradesh
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt calender-icon"></i>2008-2010
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            <div className="qualification_data">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                {/* <span className="qualification_line"></span> */}
              </div>
              <div>
                <h3 className="qualification_title">S.S.C</h3>
                <span className="qualification_subtitle">
                  Board of Secondary Education Andhra Pradesh
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt calender-icon"></i>2007-2008
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification_content qualification_content-active"
                : "qualification_content"
            }
          >
            <div className="qualification_data">
              <div>
                <h3 className="qualification_title">Front-End Web Developer </h3>
                <span className="qualification_subtitle">
                  Vrishchik Technologies LLP
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt calender-icon"></i>2025(Feb)-Present
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            <div className="qualification_data extra">
              <div>
                <h3 className="qualification_title">Associate Software Engineer</h3>
                <span className="qualification_subtitle">
                  Irax Tech Private Limited-Hyderbad
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt calender-icon"></i>2023(Jun)-2024(Jun)
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
            </div>
            <div className="qualification_data extra">
              <div></div>
              <div>
                <span className="qualification_rounder"></span>
                <span className="qualification_line"></span>
              </div>
              <div>
                <h3 className="qualification_title">Full Stack Trainig</h3>
                <span className="qualification_subtitle">
                  NxtWave-CCBP 4.0 Certification Programs
                </span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt calender-icon"></i>2021(Nov)-2023(May)
                </div>
              </div>
            </div>
            <div className="qualification_data extra">
              <div>
                <h3 className="qualification_title">Assistant professor</h3>
                <span className="qualification_subtitle">Annamacharya Institute Of Technology And Sciences-Hyderabad</span>
                <div className="qualification_calender">
                  <i className="uil uil-calendar-alt calender-icon"></i>2016(Jun)-2021(Jun)
                </div>
              </div>
              <div>
                <span className="qualification_rounder"></span>
                {/* <span className="qualification_line"></span> */}
              </div>
            </div> 
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qulifications;
