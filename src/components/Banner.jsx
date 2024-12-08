import React, { useEffect, useState } from 'react';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; 

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
    }, 5000); 

    return () => clearInterval(interval); 
  }, [totalSlides]);

  return (
    <div className="relative w-full rounded-lg overflow-hidden">
      {/* Carousel Items */}
      <div
        className="flex transition-transform duration-700"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        <div className="carousel-item w-full">
          <img
            src="https://i.ibb.co/hZZQ3js/Banner-1.jpg"
            alt="Item 1"
            className="w-full h-[300px] object-cover"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src="https://i.ibb.co.com/YWs0Ct3/banner-4.jpg"
            alt="Item 2"
            className="w-full h-[300px] object-cover"
          />
        </div>
        <div className="carousel-item w-full">
          <img
            src="https://i.ibb.co/qNCRVzY/banner-3.jpg"
            alt="Item 3"
            className="w-full h-[300px] object-cover"
          />
        </div>
      </div>

      {/* Carousel Navigation */}
      <div className="absolute inset-0 flex justify-between items-center px-4">
        <button
          onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides)}
          className="btn btn-circle bg-gray-800 text-white hover:bg-gray-700"
        >
          ❮
        </button>
        <button
          onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides)}
          className="btn btn-circle bg-gray-800 text-white hover:bg-gray-700"
        >
          ❯
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 w-2 rounded-full ${
              currentSlide === index ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Banner;
