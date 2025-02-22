import React, { useState, useEffect } from 'react';
import './img.css'; // Assuming a CSS file for styles

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoSliding, setIsAutoSliding] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isAutoSliding) {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoSliding, images.length]);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    // Keep automatic sliding active
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    // Keep automatic sliding active
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    // Keep automatic sliding active
  };

  return (
    <div className="carousel">
      <h1>Image Carousel</h1>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
      <button onClick={handlePrevious} disabled={currentIndex === 0}>&#60;</button>
      <button onClick={handleNext} disabled={currentIndex === images.length - 1}>&#62;</button>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;



