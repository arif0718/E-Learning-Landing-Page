import React, { useState, useEffect, useRef } from 'react';
import './Why.css';
import { motion } from 'framer-motion';
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";
import { useSwipeable } from 'react-swipeable';

const Why = () => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    // Set the width when the component mounts
    setWidth(containerRef.current.clientWidth);

    console.log(width);

    // Update width on window resize
    const handleResize = () => {
      setWidth(containerRef.current.clientWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const caseStudies = [
    {
      id: 1,
      category: ["Manufacturing", "Onboarding"],
      imgSrc: "https://www.finolex.com/UploadedImages/Finolex_Roorkee_Plant.JPG",
      logoSrc: "assets/Finolex_Logo.png",
      heading: "Finolex Industries leverages gamified training to enhance employee onboarding with The Wise Blend.",
      subHeading: "India’s leading PVC manufacturer is driving employee engagement and compliance across its operations using E-Learning. ",
      stats: [
        { value: "5x", description: "faster onboarding for new hires." },
        { value: "90%", description: "reduction in reported Code of Conduct violations." }
      ]
    },
    {
      id: 2,
      category: ["Retail", "Technical Simulation"],
      imgSrc: "https://inc42.com/cdn-cgi/image/quality=75/https://asset.inc42.com/2023/08/titan-caratlane-featured-1.png",
      logoSrc: "assets/CL_new.png",
      heading: "CaratLane grows customer engagement and sales efficiency with The Wise Blend.",
      subHeading: "How India’s largest omni-channel jeweller is accelerating sales performance through E-Learning.",
      stats: [
        { value: "500+", description: "employees trained across 250+ stores." },
        { value: "3.5 to 4.8 stars", description: "increase in customer service ratings." }
      ]
    },
    {
      id: 3,
      category: ["Banking", "Sales-Enablement"],
      imgSrc: "https://www.commercialdesignindia.com/wp-content/uploads/cloud/2023/08/08/image-1-1200x722.png",
      logoSrc: "assets/HDFC_Bank.png",
      heading: "HDFC Bank boosts sales enablement with product training by The Wise Blend.",
      subHeading: "One of the largest private sector banks is enhancing sales efficiency for loan products using E-Learning.",
      stats: [
        { value: "1000+", description: "employees trained in 4 weeks." },
        { value: "5 out of 10", description: 'deals closed post-training - need to add the word “closed”.' }
      ]
    }
  ];

  const totalItems = caseStudies.length;
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideIntervalRef = useRef(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    resetAutoSlide();
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    resetAutoSlide();
  };

  const resetAutoSlide = () => {
    if (slideIntervalRef.current) {
      clearInterval(slideIntervalRef.current);
    }
    startAutoSlide();
  };

  const startAutoSlide = () => {
    slideIntervalRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }, 5000);
  };

  useEffect(() => {
    startAutoSlide();
    return () => {
      if (slideIntervalRef.current) {
        clearInterval(slideIntervalRef.current);
      }
    };
  }, []);

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });

  return (
    <div className="our-partner-6">
      <div className="our-partner-content-6">
        <div className="top-6">
          <div>Featured Case Studies</div>
          <div>
            Take Your Company  <br /> Farther,
            Faster!
          </div>
        </div>
      </div>
      <div className="why-carousel-container" {...swipeHandlers}>
        <div className="why-box">
          <div className="why-wrapper"
            style={{
              display: 'flex',
              transform: `translateX(-${currentIndex * width}px)`,
              transition: 'transform 0.3s ease-in-out',
            }}
          >
            {caseStudies.map((study) => (
              <div className="why" key={study.id} ref={containerRef}>
                <div className="why-img-box">
                  <img loading="lazy" src={study.imgSrc} alt="" />
                  <div className="img-box-info">
                    <div className="nd-img-box">
                      <img src={study.logoSrc} alt="" />
                    </div>
                  </div>
                </div>
                <div className="why-box-info">
                  <div className="top-button">
                    {study.category.map((cat, i) => (
                      <span key={i}>{cat}</span>
                    ))}
                  </div>
                  <div className="why-box-heading">{study.heading}</div>
                  <div className="why-box-sub-heading">{study.subHeading}</div>
                  <div className="bottom-number-stat">
                    {study.stats.map((stat, i) => (
                      <h4 key={i}>
                        <strong>{stat.value}</strong>
                        <span>
                          <em className="spandblock">{stat.description}</em>
                        </span>
                      </h4>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="why-carousel-controls">
          <motion.button
            type="button"
            onClick={handlePrev}
            className="control-btn"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <IoMdArrowRoundBack />
          </motion.button>

          <motion.button
            type="button"
            onClick={handleNext}
            className="control-btn"
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <IoMdArrowRoundForward />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Why;
