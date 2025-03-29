import React from "react";
import "./Process.css";

const Process = () => {
    // Data for the cards
    const activities = [
        {
            title: "Discover & Strategize",
            image: "assets/Discover-Strategize.jpg",
            description:
                "We dive deep to understand your unique needs and craft a tailored learning strategy that aligns with your goals.",
        },
        {
            title: "Design & Craft",
            image: "assets/Design-Craft.png",
            description:
                "Our team brings your vision to life with immersive storyboards, engaging visuals, and innovative content.",
        },
        {
            title: "Develop & Launch",
            image: "assets/Develop-Launch.jpg",
            description:
                "We transform designs into high-quality, interactive modules and seamlessly deploy them for maximum impact.",
        },
    ];

    return (
        <div id="card-area">
            <div className="our-partner-content">
                <div className="top">
                    <div>How We Work</div>
                    <div>We Do Things Differently Here</div>
                    <div>
                    At The Wise Blend, we go beyond just creating content; we create experiences that
                    transform the way your team learns, works, and grows.
                    </div>
                </div>
            </div>
            <div className="wrapper-card">
                <div className="box-area">
                    {activities.map((activity, index) => (
                        <div className="box-card" key={index}>
                            <img loading="lazy" alt={activity.title} src={activity.image} />
                            <h3>{activity.title}</h3>
                            <div className="overlay">
                                <p>{activity.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Process;
