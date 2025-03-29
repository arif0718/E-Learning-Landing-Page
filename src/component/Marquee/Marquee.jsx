import React, { useState, useEffect, useRef } from "react";
import "./Marquee.css";

const Marquee = ({ darkMode }) => {
  const images = [
    "assets/Image-1.jpg",
    `${darkMode ? "assets/Image-21.jpeg" : "assets/Image-21-2.jpeg"}`,
    "assets/Image-3.jpeg",
    "assets/Image-4.jpeg",
    "assets/Image-5.jpeg",
    ` ${darkMode ? "assets/Image-6.jpeg" : "assets/Image-6-2.jpeg"}`,
    "assets/Image-7.jpeg",
    "assets/Image-8.jpeg",
    "assets/Image-1.jpg",
    `${darkMode ? "assets/Image-21.jpeg" : "assets/Image-21-2.jpeg"}`,
    "assets/Image-4.jpeg",
    "assets/Image-5.jpeg",
    `${darkMode ? "assets/Image-6.jpeg" : "assets/Image-6-2.jpeg"}`,
    "assets/Image-7.jpeg",
    "assets/Image-8.jpeg",
    "assets/Image-1.jpg",
    `${darkMode ? "assets/Image-21.jpeg" : "assets/Image-21-2.jpeg"}`,
    "assets/Image-4.jpeg",
    "assets/Image-5.jpeg",
    ` ${darkMode ? "assets/Image-6.jpeg" : "assets/Image-6-2.jpeg"}`,
    "assets/Image-7.jpeg",
    "assets/Image-8.jpeg",
  ];

  const [isDragging, setIsDragging] = useState(false);
  const [currentTranslate, setCurrentTranslate] = useState(0);
  const startX = useRef(0);
  const sliderWrapperRef = useRef(null);

  const boxWidth = 360 + 20; // Box width + margin

  const createImages = () => {
    return [...images, ...images, ...images].map((image, index) => (
      <div key={index} className="marquee-box">
        <img src={image} alt={`marquee-img-${index}`} className="marquee-img" />
      </div>
    ));
  };

  useEffect(() => {
    const sliderWrapper = sliderWrapperRef.current;

    const resetScrollToMiddle = () => {
      const initialTranslate = -boxWidth * Math.floor(sliderWrapper.children.length / 3);
      setCurrentTranslate(initialTranslate);
      sliderWrapper.style.transition = "none";
      sliderWrapper.style.transform = `translateX(${initialTranslate}px)`;
    };

    resetScrollToMiddle();

    const autoLoop = () => {
      setCurrentTranslate((prevTranslate) => {
        let newTranslate = prevTranslate - 1;
        if (newTranslate <= -boxWidth * sliderWrapper.children.length / 3) {
          newTranslate = 0;
          sliderWrapper.style.transition = "none";
          sliderWrapper.style.transform = `translateX(${newTranslate}px)`;
        } else {
          sliderWrapper.style.transition = "transform 0.02s ease";
          sliderWrapper.style.transform = `translateX(${newTranslate}px)`;
        }
        return newTranslate;
      });
      requestAnimationFrame(autoLoop);
    };

    autoLoop();
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.pageX;
    sliderWrapperRef.current.style.transition = "none";
    sliderWrapperRef.current.classList.add("marquee-grabbing");
  };

  const handleTouchStart = (e) => {
    setIsDragging(true);
    startX.current = e.touches[0].pageX;
    sliderWrapperRef.current.style.transition = "none";
    sliderWrapperRef.current.classList.add("marquee-grabbing");
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.pageX - startX.current;
    setCurrentTranslate((prevTranslate) => prevTranslate + deltaX);
    startX.current = e.pageX;
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const deltaX = e.touches[0].pageX - startX.current;
    setCurrentTranslate((prevTranslate) => prevTranslate + deltaX);
    startX.current = e.touches[0].pageX;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    sliderWrapperRef.current.classList.remove("marquee-grabbing");
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
    sliderWrapperRef.current.classList.remove("marquee-grabbing");
  };

  return (
    <div
      className="marquee-container"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="marquee-wrapper" ref={sliderWrapperRef}>
        {createImages()}
      </div>
    </div>
  );
};

export default Marquee;
