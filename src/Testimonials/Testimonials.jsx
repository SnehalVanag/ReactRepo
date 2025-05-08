import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      text: "I Am Incredibly Grateful For The Fantastic Learning Experience I Had With This Platform. The Courses Offered, Especially In Web Development, Were Comprehensive And Well-Structured. The Instructors Were Knowledgeable, Engaging, And Always Ready To Assist.",
      name: "Abhishek Jadhav",
      image: "/images/abhishek.jpg"
    },
    {
      text: "I am incredibly grateful for the fantastic learning experience I had with this platform. The courses offered, especially in web development, were comprehensive and well-structured. The instructors were knowledgeable, engaging, and always ready to assist. The practical projects and hands-on exercises greatly contributed to my skill development.",
      name: "Shubham Patil",
      image: "/images/shubham.jpg"
    },
    {
      text: "I am incredibly grateful for the fantastic learning experience I had with this platform. The courses offered, especially in web development, were comprehensive and well-structured. The instructors were knowledgeable, engaging, and always ready to assist. The practical projects and hands-on exercises greatly contributed to my skill development.",
      name: "Shruti Kalbhor",
      image: "/images/shruti.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="testimonials-section">
      <h1 className="testimonials-title">
        <span className="highlight-blue">T</span>estimonials
      </h1>

      <div className="testimonials-container">
        <button className="nav-button prev" onClick={prevSlide}>&lt;</button>
        
        <div className="testimonials-slider">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`testimonial-card ${index === currentSlide ? 'active' : ''}`}
              style={{
                transform: `translateX(${(index - currentSlide) * 100}%)`,
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              <div className="testimonial-content">
                <div className="quote-icon">"</div>
                <p className="testimonial-text">{testimonial.text}</p>
              </div>
              <div className="testimonial-author">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="author-image" 
                />
                <h3 className="author-name">{testimonial.name}</h3>
              </div>
            </div>
          ))}
        </div>

        <button className="nav-button next" onClick={nextSlide}>&gt;</button>
      </div>

    </div>
  );
};

export default Testimonials;