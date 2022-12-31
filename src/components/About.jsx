import React from "react";
import "./About.css";
import profilePic from "../assets/profilePic.png";

const About = () => {
  return (
    <div className="about">
      <div />
      <div>
        <img className="profile-pic" src={profilePic} alt="Profile Pic" />
      </div>
      <div className="about-intro">
        <div className="intro-titles">
          <p id="title-1">My Intro ✨</p>
          <h1 id="title-name">About Me ✌️</h1>
          <p>Curious, sincere and hardworking: These 3 things define me.</p>
        </div>
        {/* <div className="education">
					<p className="interests-title">Education 📖</p>
					<div>
						<h4>Goa College of Engineering</h4>
						<p>
							Bachelor's degree, Electronics & Telecommunication Engineering
						</p>
						<p className="edu-year">2018-2022</p>
						<p>Grade : 83.91%</p>
					</div>
				</div> */}
        <div className="interests">
          <p className="interests-title">My Interests 😍</p>
          <div className="interests-list">
            <p>Drawing 🎨</p>
            <p>Cycling 🚴</p>
            <p>Coding 👨‍💻</p>
            <p>Music 🎧</p>
            <p>Running 🏃</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
