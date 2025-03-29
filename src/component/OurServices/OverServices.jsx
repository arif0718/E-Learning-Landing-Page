import { useRef } from "react";
import "./OverServices.scss";
import { useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FaApple } from "react-icons/fa";

const Single = ({ containerRef, headingRef, stickyThreshold = 200, stopThreshold = 200,servicesData }) => {
    const [isSticky, setIsSticky] = useState(false);
    const [stopScroll, setStopScroll] = useState(false);
    const imageRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (imageRef.current && headingRef.current) {
                const imageRect = imageRef.current.getBoundingClientRect();
                const headingRect = headingRef.current.getBoundingClientRect();

                // Sticky Logic
                if (imageRect.top <= stickyThreshold && headingRect.bottom - imageRect.top >= stopThreshold) {
                    setIsSticky(true);
                } else {
                    setIsSticky(false);
                }

                // Stop Scroll Logic
                if (headingRect.bottom - imageRect.bottom >= stopThreshold) {
                    setStopScroll(true);
                } else {
                    setStopScroll(false);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [stickyThreshold, stopThreshold]);

    return (
        <>

            {servicesData.map((service) => (

                <div
                key={service.heading}
                    className="container"
                    ref={containerRef}
                    style={{
                        position: `${!isSticky && "sticky"}`,
                        top: `${!isSticky && "180px"}`,
                    }}
                >
                    <div className="wrapper"
                    
                    >
                        <div className="imageContainer"
                         style={{
                            width: "100vw",
                            borderRadius: "50px 50px 0 0",
                            background:"url(assets/bg-download.webp)",
                            backgroundRepeat:"no-repeat",
                            backgroundPosition:"center",
                            backgroundSize:"cover"
                        }}
                        >
                            <motion.div
                               

                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="first-service"
                               
                            >
                                <div className="service-heading">
                                    <h2>{service.heading}</h2>
                                    <div style={{
                                        fontSize:"40px",
                                        marginBottom:"16px",
                                        marginTop:"-12px"
                                    }}>{service?.subDes}</div>
                                    <h5>
                                      {service.description}
                                    </h5>
                                </div>
                                <div className="service-image-image">
                                    <img loading="lazy" className="image" src={service.imageSrc} alt="" />
                                    <FaApple className="apple-logo"/>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>

            ))}

        </>
    );
};

const servicesData = [
    {
        heading: "Interactive eLearning",
        description: "Drive active learning with features like clickable infographics, hotspots, and assessments, making complex topics simple and engaging.",
        imageSrc: "assets/Interactive.gif",
    },
    {
        heading: "Game-Based Learning",
        description: "Fun and competitive ways to develop key skills with engaging, game-like elements.",
        imageSrc: "assets/Gamified.gif",
    },
    {
        heading: "2D/3D Animation",
        description: "Use dynamic visuals to simplify complex topics and make learning visually stimulating.",
        imageSrc: "assets/2D-and-3D.gif",
    },
    {
        heading: `${"Immersive Videos"}`,
        subDes:"(Live Shoot Content)",
        description: "Real-world video content that brings learning to life with relatable scenarios.",
        imageSrc: "assets/Live-Video.gif",
    },
    {
        heading: "AR & VR Simulations",
        description: "Provide hands-on experience with augmented and virtual reality simulations to hone critical skills.",
        imageSrc: "assets/AR-&-VR.gif",
    },
    {
        heading: "Content & Creative Services",
        description: "Bring your expertise to life with our end-to-end services, from refining your subject matter to producing high-quality, professionally shot courses.",
        imageSrc: "assets/Content-Creation.gif",
    },
];


const OverServices = () => {

    const headingRef = useRef(null);
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { threshold: 0.5 });


    return (
        <div className="portfolio">
            <div className="progress">
                <motion.div className="about-content"
                    animate={{
                        paddingTop: isInView ? "20px" : "100px", // Ensure a valid CSS value
                    }}
                    exit={{
                        opacity: 0,
                        transition: { duration: 0.5 },

                    }}
                    transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                    }}
                >
                    <div className="heading">
                        <div>Our Services</div>
                    </div>
                    <div className="top-head" ref={headingRef}>
                        Think Differently About Your Business Requirements
                    </div>
                    <div className="top-para"></div>
                </motion.div>
                <motion.div
                    className="table"
                    animate={{
                        // marginBottom: isInView ? "0px" : "80vh", // Adjust 20px to any default value
                    }}
                    transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                    }}
                >
                    {/* Additional content if needed */}
                </motion.div>
            </div>
            <Single
                containerRef={containerRef}
                headingRef={headingRef}
                stickyThreshold={500}
                stopThreshold={800}
                servicesData={servicesData}
            />
        </div>
    );
};

export default OverServices;
