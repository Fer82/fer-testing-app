import React from "react";
import fernando from "../../assets/images/granada-spain.jpg";
import './style.css';

function AboutMe() {
  const skills = ['JavaScript', 'CSS', 'HTML', 'Bootstrap', 'React', 'JQuery', 'MySQL', 'MongoDB', 'Express', 'Handlebars', 'OOP', 'Node.js', 'Ajax', 'ES6', 'Git']
  return (
    <div className="row">
      <div className="col-md-9 col-sm-12">
        <div className="card bg-light">
          <div className="card-body">
            <h1 className="card-title" title="About Me"><span id="about">About</span> <span id='me'><strong>Me</strong></span></h1>
            <hr></hr>
            <div id="about-me-image">
              <img src={fernando} alt="Fernando Angulo Donoso" className="img-thumbnail shadow" title="Fernando Angulo Donoso"></img>
            </div>
            <div id="about-me">
              <h3>Current Work</h3>
              <p> Bilingual Software Support Specialist at <a href="https://www.gradelink.com/" target="_blank" rel="noreferrer">Gradelink</a>, a Student Information System.</p>
              <h3>School</h3>
              <p> Graduated from the European University of Madrid in 2010 with a Bachelor in Sports Science.</p>
              <h3>Skills</h3>
              <div id="skills">
                {skills.map(skill => (
                  <p key={skill}><span class="skill">{skill}</span></p>
                ))}
              </div>
            </div>
            <div style={{ clear: 'both' }}>
              <hr></hr>
              <p style={{ textAlign: "center" }}>Click <a href="assets/Fernando Angulo Donoso Resume.pdf" target="_blank" title="resume">here</a> to view my current resume!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;

