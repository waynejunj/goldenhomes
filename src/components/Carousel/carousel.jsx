import React, { useState, useEffect } from 'react';
import './Carousel.css'; // We'll create this CSS file

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const slides = [
    { id: 1, image: 'home3.jpg', alt: 'Modern living room' },
    { id: 2, image: 'home2.jpg', alt: 'Beautiful kitchen' },
    { id: 3, image: 'home1.jpg', alt: 'Cozy bedroom' }
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => 
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPrev = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel">
        {slides.map((slide, index) => (
          <div 
            key={slide.id}
            className={`carousel-slide ${index === activeIndex ? 'active' : ''}`}
          >
            <img 
              src={slide.image} 
              alt={slide.alt}
              className="carousel-image"
            />
            {/* Optional: Add captions */}
            <div className="carousel-caption">
              <h3>Beautiful Home {index + 1}</h3>
              <p>Discover your perfect living space</p>
            </div>
          </div>
        ))}

        <button className="carousel-control prev" onClick={goToPrev}>
          <span className="control-icon">❮</span>
        </button>
        <button className="carousel-control next" onClick={goToNext}>
          <span className="control-icon">❯</span>
        </button>

        <div className="carousel-indicators">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;