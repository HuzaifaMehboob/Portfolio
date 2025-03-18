import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import pic1 from '../assets/images/pic1.png'

function Main() {
// "https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg"
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={pic1} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/HuzaifaMehboob" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            {/* <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a> */}
          </div>
          <h1>Huzaifa Mehboob</h1>
          <p>Full Stack Engineer</p>

          <div className="mobile_social_icons">
            <a href="https://github.com/HuzaifaMehboob" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            {/* <a href="https://www.linkedin.com/in/yujisato/" target="_blank" rel="noreferrer"><LinkedInIcon/></a> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;