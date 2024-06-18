import React from "react";
import "./work.css";

const WorkItems = ({ item }) => {
  return (
    <div className="work_card" key={item.id}>
      <img src={item.image} alt={item.title} className="work_img" />
      <h3 className="work_title">{item.title}</h3>  
      <hr/>
      <div className="tecnologies-work-container">
        <div className="workedat-container">
        <p><strong>Worked At:</strong></p>  
        <p className="tech-desc">{item.workedAt}</p>
        </div>
       <div className="tecnologies-container">
        <p><strong>TechnologiesUsed:</strong></p> 
       <p className="tech-desc">{item.TechnologiesUsed.join(' , ')}</p>
       </div>
       
      </div>
      <a href={item.url} target="_blank" className="work_button">
        <span><b>View Project</b></span> <i className="bx bx-right-arrow-alt work_button_icon"></i>
      </a> 
      {/*  */}
    </div>
  );
};

export default WorkItems;
