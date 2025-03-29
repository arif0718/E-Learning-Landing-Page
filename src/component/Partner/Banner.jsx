import React, { useEffect, useRef, useState } from 'react';
import './Banner.css';
import { FaFonticons } from 'react-icons/fa6';
import { motion } from 'framer-motion';
import { MdArrowRightAlt } from 'react-icons/md';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";

const banners = [
    {
        img: "assets/b1.jpg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum dolorum, ipsam vitae tempora obcaecati quas nisi, eum sed ad ipsum dolore tempore laborum omnis iste commodi. Odit odio praesentium, quasi quia dolor ex doloremque, soluta, voluptates eos quo quos numquam.",
        name: "Tom Cruise",
        position: "Executive Chairman & CEO, Priority",
    },
    {
        img: "assets/b1.jpg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum dolorum, ipsam vitae tempora obcaecati quas nisi, eum sed ad ipsum dolore tempore laborum omnis iste commodi. Odit odio praesentium, quasi quia dolor ex doloremque, soluta, voluptates eos quo quos numquam.",
        name: "Emma Watson",
        position: "CFO, Visionary",
    },
    {
        img: "assets/b1.jpg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum dolorum, ipsam vitae tempora obcaecati quas nisi, eum sed ad ipsum dolore tempore laborum omnis iste commodi. Odit odio praesentium, quasi quia dolor ex doloremque, soluta, voluptates eos quo quos numquam.",
        name: "Robert Downey Jr.",
        position: "Managing Director, Stark Industries",
    },
    {
        img: "assets/b1.jpg",
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum dolorum, ipsam vitae tempora obcaecati quas nisi, eum sed ad ipsum dolore tempore laborum omnis iste commodi. Odit odio praesentium, quasi quia dolor ex doloremque, soluta, voluptates eos quo quos numquam.",
        position: "COO, Black Widow Ventures",
    },
];

const Banner = () => {
    const containerRef = useRef(null);
    const [width, setWidth] = useState(0);

    useEffect(() => {
        // Set the width when the component mounts
        setWidth(containerRef.current.clientWidth);

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
    const totalItems = banners.length;
    const [currentIndex, setCurrentIndex] = useState(0);

    

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    };

    return (
        <>
            <div className="banner-box">
                <div
                    className="banner-wrapper"
                    // style={{
                    //     display: 'flex',
                    //     transform: `${width === 400 
                    //         ? `translateX(-${currentIndex * 400}px)` 
                    //         : `translateX(-${currentIndex * 1000}px)`}`,
                    //     transition: 'transform 0.3s ease-in-out',
                    // }}

                    style={{
                        display: 'flex',
                        transform: `translateX(-${currentIndex * width}px)` ,
                        transition: 'transform 0.3s ease-in-out',
                    }}
                >
                    {banners.map((banner, index) => (
                        <div className="banner" key={index}  ref={containerRef}>
                            <div className="img-box">
                                <img src={banner.img} alt={`Banner ${index + 1}`} />
                            </div>
                            <div className="right">
                                <div className="top-logo">
                                    <FaFonticons fontSize={'34px'} />
                                </div>
                                <div className="text-deatals">
                                    <div className="text">{banner.text}</div>
                                    <div className="bottom">
                                        <div className="name-info">
                                            <div>{banner.name}</div>
                                            <div>{banner.position}</div>
                                        </div>
                                        <motion.button
                                            initial={{ paddingRight: '10px' }}
                                            whileHover={{ paddingRight: '30px' }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            See case study
                                            <motion.span>
                                                <MdArrowRightAlt fontSize={'20px'} color="#fff" />
                                            </motion.span>
                                        </motion.button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="banner-carousel-controls">
                <motion.button
                    type="button"
                    onClick={handlePrev}
                    className="control-btn"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <IoMdArrowRoundBack />
                </motion.button>

                <motion.button
                    type="button"
                    onClick={handleNext}
                    className="control-btn"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <IoMdArrowRoundForward />
                </motion.button>
            </div>
        </>
    );
};

export default Banner;