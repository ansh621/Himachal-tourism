import React, { useState, useEffect } from 'react';
import ArrowButton from './ArrowButton'; // Import the ArrowButton component
import './ImageCarousel.css';

const ImageCarousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      nextImage();
    }, 7000);

    return () => clearInterval(intervalId);
  }, [images.length]);

  const translateX = -currentIndex * 100;

  return (
    <div className="carousel-container">
      <div className="carousel-image">
        <ArrowButton direction="left" onClick={prevImage} />
        <div
          className="carousel-wrapper"
          style={{
            transform: `translateX(${translateX}%)`,
          }}
        >
          {images.map((image, index) => (
            <img src={image} alt={`carousel-${index}`} key={index} />
          ))}
        </div>
        <ArrowButton direction="right" onClick={nextImage} />
      </div>
    </div>
  );
};

export default ImageCarousel;
