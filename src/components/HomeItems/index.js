import React from "react";
import fernando from "../../assets/images/fer.jpg"
import github from "../../assets/images/github-logo.png"
import linkedin from "../../assets/images/linkedin.png"
import "./style.css";

function HomeItems() {
    return (
    <div>
        <div className="home-container">
            <div className = "row">
                <div className="card-body">
                    <div id="image">
                        <img src={fernando} alt="Fernando Angulo Donoso" className="img-thumbnail mx-auto d-block" title="Fernando Angulo Donoso"></img>
                    </div>
                </div>
            </div>
            <h1 id="greeting">Hello! I'm <span><strong>Fernando Angulo Donoso</strong></span>!</h1>
            <h5 id="role">Full Stack Web Developer | Software Support Specialist</h5>
            <div id="social">
                <a href="https://github.com/Fer82" target="_blank" rel="noreferrer"><img src={github} alt="github" className="social-image"></img></a>{' '}
                <a href="https://www.linkedin.com/in/fernando-angulo-donoso-b3749026/" target="_blank" rel="noreferrer"><img src={linkedin} alt="LinkedIn" className="social-image"></img></a>
            </div>
        </div>
    </div>
    );
}

export default HomeItems;