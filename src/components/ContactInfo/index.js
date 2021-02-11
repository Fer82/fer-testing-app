import React from "react";
import github from "../../assets/images/github-logo.png";
import linkedin from "../../assets/images/linkedin.png";
import "./style.css";

function ContactInfo() {
  return (
    <div className="col-md-5">
        <div className="card bg-light shadow">
            <div className="card-body">
                <h3 className="contact_details">Email</h3>
                <a href="mailto:fangulo82@gmail.com">fangulo82@gmail.com</a>
                <hr></hr>
                <h3 className="contact_details">Phone</h3>
                <p>(562) 544-7106</p>
                <hr></hr>
                <a href="https://github.com/Fer82" target="_blank" rel="noreferrer"><img src={github} alt="github" class="social-icons"></img></a>{' '}
                <a href="https://www.linkedin.com/in/fernando-angulo-donoso-b3749026/" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn" class="social-icons"></img></a>
            </div>
        </div>  
    </div>
  );
}

export default ContactInfo;