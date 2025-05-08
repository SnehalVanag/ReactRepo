import React from 'react';
import './Courses.css';
import { BsFiletypePy } from 'react-icons/bs';
import pythonLogo from '../assets/python.jpg'; 
import phpLogo from '../assets/php.png'; 
import cLogo from '../assets/c.png'; 
import aiLogo from '../assets/ai.jpg'; 
const Courses = () => {
  const courseData = [
    {
      icon: pythonLogo,
      subtitle: 'PYTHON PROGRAMMING',
    },
    {
      icon: phpLogo,
      subtitle: 'PHP PROGRAMMING',
    },
    {
      icon:cLogo,
      subtitle: 'C++ PROGRAMMING',
    },
    {
      icon:aiLogo,
      subtitle: 'ARTIFICIAL INTELLIGENCE',
    }
  ];

  return (
    // <div className="courses-section">
    //   <h1 className="courses-title">
    //     <span className="highlight-blue">O</span>ur 
    //     <span className="highlight-blue">C</span>ourses
    //   </h1>
      
    //   <div className="courses-grid">
    //     {courseData.map((course, index) => (
    //       <div key={index} className="course-card">
    //         <div className="course-icon-container">
           
    //         {/* <div className="user-profile">
    //     <img src={pythonLogo} alt="Python" className="profile-image" />
    //   </div> */}
    //           <img src={course.icon} alt={course.title} className="course-icon" />
    //           <div className="course-subtitle">{course.subtitle}</div>
    //         </div>
    //         <h3 className="course-title">{course.title}</h3>
    //         <button className="learn-more-btn">Learn More</button>
    //       </div>
    //     ))}
    //   </div>
    // </div>
<div className="courses-section">
      <h1 className="courses-title">
        <span className="highlight-blue">O</span>ur 
        <span className="highlight-blue">C</span>ourses
      </h1>
      
      <div className="courses-grid">
        {courseData.map((course, index) => (
          <div key={index} className="course-card">
            <div className="course-icon-box">
              <img src={course.icon} alt={course.title} className="course-icon" />
              <div className="course-subtitle">{course.subtitle}</div>
            </div>
            <button className="learn-more-btn">Learn More</button>
          </div>
        ))}
      </div>
    </div>
   
  );
};

export default Courses;

