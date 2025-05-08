import React, { useState, useEffect } from 'react';
import './body.css';
import image1 from '../assets/img.jpg';
import image2 from '../assets/img.jpg';
import image3 from '../assets/img.jpg';
import image4 from '../assets/img.jpg';

const Body = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const images = [image1, image2, image3, image4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="moving-banner">
        <p>A Leading Professional Training Institute in Pune Since 2005. Located in KOTHRUD | TILAK ROAD | KATRAJ | WARJE. Book a Free Demo Now: 9309907928 | 9403090958 | 9422301684. A Training Center for programming languages like C, C++, JAVA, PHP</p>
      </div>
      <div className="hero-container">
        <div className="slider">
          {images.map((img, index) => (
            <div
              key={index}
              className={`slide ${index === currentSlide ? 'active' : ''}`}
            >
              <img src={img} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;