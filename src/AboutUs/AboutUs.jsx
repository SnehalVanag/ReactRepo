import React from 'react';
import './AboutUs.css';
import img from '../assets/business.jpg'

const AboutUs = () => {
  return (
    <div className="about-section">
      <h1 className="about-title">
        <span className="highlight-blue">A</span>bout 
        <span className="highlight-blue">U</span>s
      </h1>
      
      <div className="about-content">
        <div className="about-text">
          <p>
            Welcome To Our Learning Institute, Where Learning Is Made Easy For Everyone. 
            Our Team Comprises Seasoned Corporate Trainers With Over 20 Years Of Invaluable 
            Experience Of Training Professional Developers In The IT Industry. Here We Ensure 
            Effective Knowledge Delivery In A Language That's Accessible To All.
          </p>
          <p>
            Whether You're A Non-Technical Student Eager To Expand Your Knowledge In IT Or 
            A Student From CS Or IT Field Looking To Gain Practical And Industrial Experience 
            To Fuel Your Developing Skills, Our Courses Of Major Programming Languages Like C, 
            C++, JAVA, Python Are Designed To Cater To Your Needs At This Initial Stage Of 
            Your Career Journey.
          </p>
          <p>
            With Our Online Availability, You Have The Flexibility To Learn Anywhere. Beyond 
            Computer Technologies, Our Courses Also Focus On Web Technologies Where We Offer 
            Full Stack Web Development Course. This Course Focuses On Web App Development Using 
            Languages And They Are Not Limited To HTML/CSS, PHP, JavaScript, MySQL, Python, Also 
            Includes Technologies Like Code Ignitor. Apart From Courses We Also Lean On Teaching 
            Some Essential Corporate Skills Like Using GIT AND GITHUB.
          </p>
        </div>
        <div className="about-content">
  <div className="about-text">
  </div>
  
  <div className="tech-image">
    <img src={img} alt="Technology Stack" className="tech-stack-img" />
  </div>
</div>
      </div>
    </div>
  );
};

export default AboutUs;