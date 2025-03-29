import React, { useState, useRef, useEffect } from 'react';
import './WedeliverBox.css'; // For styling

const Wedeliver = () => {
    const boxes = [
        { color: '#bf2527', text: '96%', text2: 'of clients report improved team efficiency within 3 months of training.', tc: '#fff' },
        { color: '#da7a7b', text: '90%', text2: 'of employees feel more prepared for their roles after completing our programs.', tc: '#000' },
        { color: '#6c0a03', text: '65%', text2: 'saved in training costs through our innovative E-learning solutions.', tc: '#fff' },
        { color: '#dd0002', text: '4 out of 5', text2: 'employees say our gamified training makes learning more engaging.', tc: '#fff' },
        { color: '#ededed', text: '45%', text2: 'boost in sales productivity after implementing our sales enablement programs.', tc: '#000' },
        { color: '#bf2527', text: '96%', text2: 'of clients report improved team efficiency within 3 months of training.', tc: '#fff' },
        { color: '#da7a7b', text: '90%', text2: 'of employees feel more prepared for their roles after completing our programs.', tc: '#000' },
        { color: '#6c0a03', text: '65%', text2: 'saved in training costs through our innovative E-learning solutions.', tc: '#fff' },
        { color: '#dd0002', text: '4 out of 5', text2: 'employees say our gamified training makes learning more engaging.', tc: '#fff' },
        { color: '#ededed', text: '45%', text2: 'boost in sales productivity after implementing our sales enablement programs.', tc: '#000' },
        { color: '#bf2527', text: '96%', text2: 'of clients report improved team efficiency within 3 months of training.', tc: '#fff' },
        { color: '#da7a7b', text: '90%', text2: 'of employees feel more prepared for their roles after completing our programs.', tc: '#000' },
        { color: '#6c0a03', text: '65%', text2: 'saved in training costs through our innovative E-learning solutions.', tc: '#fff' },
        { color: '#dd0002', text: '4 out of 5', text2: 'employees say our gamified training makes learning more engaging.', tc: '#fff' },
        { color: '#ededed', text: '45%', text2: 'boost in sales productivity after implementing our sales enablement programs.', tc: '#000' },
    ];

    const [isDragging, setIsDragging] = useState(false);
    const [currentTranslate, setCurrentTranslate] = useState(0);
    const startX = useRef(0);
    const totalBoxes = useRef(0);
    const sliderWrapperRef = useRef(null);

    const boxWidth = 360 + 20; // Box width + margin (10px each side)

    const createBoxes = () => {
        return [...boxes, ...boxes, ...boxes].map((box, index) => (
            <div
                key={index}
                className="slider-box"
                style={{
                    backgroundColor: box.color,
                }}
            >
                <div className="box-text" style={{ color: box.tc }}>
                    <p>{box.text}</p>
                    <p>{box.text2}</p>
                </div>
            </div>
        ));
    };

    useEffect(() => {
        const sliderWrapper = sliderWrapperRef.current;
        totalBoxes.current = sliderWrapper.children.length;

        const resetScrollToMiddle = () => {
            const initialTranslate = -boxWidth * Math.floor(totalBoxes.current / 3);
            setCurrentTranslate(initialTranslate);
            sliderWrapper.style.transition = 'none';
            sliderWrapper.style.transform = `translateX(${initialTranslate}px)`;
        };

        resetScrollToMiddle();

        // Add a slight delay to ensure styles and DOM are ready before auto-loop initialization
        const autoLoopTimer = setTimeout(() => {
            const autoLoop = () => {
                setCurrentTranslate((prevTranslate) => {
                    let newTranslate = prevTranslate - 1;
                    const maxScroll = -boxWidth * totalBoxes.current / 3;

                    if (newTranslate <= maxScroll) {
                        newTranslate = 0;
                        sliderWrapper.style.transition = 'none'; // Reset without animation
                    } else {
                        sliderWrapper.style.transition = 'transform 0.02s linear';
                    }

                    sliderWrapper.style.transform = `translateX(${newTranslate}px)`;
                    return newTranslate;
                });

                requestAnimationFrame(autoLoop);
            };

            autoLoop();
        }, 100); // Allow the initial reset to complete

        return () => clearTimeout(autoLoopTimer);
    }, []);

    const handleMouseDown = (e) => {
        setIsDragging(true);
        startX.current = e.pageX || e.touches[0].pageX;
        const sliderWrapper = sliderWrapperRef.current;
        sliderWrapper.style.transition = 'none';
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;
        const currentX = e.pageX || e.touches[0].pageX;
        const deltaX = currentX - startX.current;
        setCurrentTranslate((prevTranslate) => prevTranslate + deltaX);
        startX.current = currentX;
    };

    const handleMouseUp = () => {
        setIsDragging(false);
        adjustInfiniteScroll();
    };

    const handleMouseLeave = () => {
        if (!isDragging) return;
        setIsDragging(false);
        adjustInfiniteScroll();
    };

    const adjustInfiniteScroll = () => {
        const sliderWrapper = sliderWrapperRef.current;
        const totalWidth = boxWidth * totalBoxes.current;

        if (currentTranslate <= -totalWidth) {
            const newTranslate = currentTranslate + totalWidth;
            setCurrentTranslate(newTranslate);
            sliderWrapper.style.transition = 'none';
            sliderWrapper.style.transform = `translateX(${newTranslate}px)`;
        } else if (currentTranslate >= 0) {
            const newTranslate = currentTranslate - totalWidth;
            setCurrentTranslate(newTranslate);
            sliderWrapper.style.transition = 'none';
            sliderWrapper.style.transform = `translateX(${newTranslate}px)`;
        } else {
            sliderWrapper.style.transition = 'transform 0.2s ease';
            sliderWrapper.style.transform = `translateX(${currentTranslate}px)`;
        }
    };

    return (
        <div className="our-partner-del">
            <div className="our-partner-content-del">
                <div className="top-del">
                    <div>Proven Results</div>
                    <div>Measurable Impact on Your Business</div>
                </div>
            </div>
            <div
                className="slider-container"
                onMouseDown={handleMouseDown}
                onMouseMove={handleMouseMove}
                onMouseUp={handleMouseUp}
                onMouseLeave={handleMouseLeave}
                onTouchStart={handleMouseDown} // Add touch support
                onTouchMove={handleMouseMove}  // Add touch support
                onTouchEnd={handleMouseUp}     // Add touch support
            >
                <div className="slider-wrapper" ref={sliderWrapperRef}>
                    {createBoxes()}
                </div>
            </div>
        </div>
    );
};

export default Wedeliver;
