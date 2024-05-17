import React, { useState, useEffect } from 'react';
import { imageData, slidesData } from './data';

const BannerSlider = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            plusSlides(1);
        }, 5000);

        return () => clearInterval(slideInterval);
    }, [activeSlide]);

    const plusSlides = (n) => {
        let newIndex = activeSlide + n;
        if (newIndex >= slidesData.length) {
            newIndex = 0;
        } else if (newIndex < 0) {
            newIndex = slidesData.length - 1;
        }
        setActiveSlide(newIndex);
    }

    const currentSlide = (index) => {
        setActiveSlide(index);
    }

    return (
        <div className="slider-container">
            <div className="slider">
                {slidesData.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`slide ${activeSlide === index ? 'active' : ''}`}
                    >
                        <img src={imageData[slide.imgKey]} alt={`Slide ${slide.id}`} />
                        <h2 className={index % 2 === 0 ? 'left' : 'right'}>{slide.heading}</h2>
                    </div>
                ))}
            </div>
            <button className="prev" onClick={() => plusSlides(-1)}>&#10094;</button>
            <button className="next" onClick={() => plusSlides(1)}>&#10095;</button>
            <div className="dots-container">
                {slidesData.map((slide, index) => (
                    <span
                        className={`dot ${activeSlide === index ? 'active' : ''}`}
                        key={slide.id}
                        onClick={() => currentSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
}

export default BannerSlider;
