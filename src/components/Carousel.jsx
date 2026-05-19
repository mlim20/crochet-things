import React, { useState } from 'react'
import './Carousel.css'
import carouselSlides from '../resources/carouselSlides.json'
import {BsAirplane, BsArrowLeftCircleFill, BsArrowRightCircleFill} from 'react-icons/bs'

// Code adapted from Code Complete: https://www.youtube.com/watch?v=QpsGo8kZiTo
const Carousel = () => {
    const [slide, setSlide] = useState(0);

    const nextSlide = () =>  {
        setSlide(slide === carouselSlides.length - 1 ? 0 : slide + 1);
    };

    const prevSlide = () => {
        setSlide(slide === 0 ? carouselSlides.length - 1 : slide - 1);
    }
    return (
        <div className="carousel-container">
            <BsArrowLeftCircleFill className="arrow arrow-left" onClick={prevSlide}/>
            {
                carouselSlides.map((item, idx) => {
                    return (
                        <img 
                            src={item.imagePath} 
                            alt={item.label} 
                            key={idx} 
                            className={slide === idx ? "slide" : "slide slide-hidden"}
                        />
                    );
                })
            }
            <BsArrowRightCircleFill className="arrow arrow-right" onClick={nextSlide}/>
            <span className="indicators">
                {
                    carouselSlides.map((_, idx) => {
                        return (
                            <button 
                                key={idx} 
                                onClick={() => setSlide(idx)} 
                                className={slide === idx ? "indicator" : "indicator indicator-inactive"}>
                            </button>
                        );
                    })
                }
            </span>
        </div>
    )
}

export default Carousel;