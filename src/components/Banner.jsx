import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import slider1 from '../assets/Banner/Banner1.jpg'
import slider2 from '../assets/Banner/Banner2.jpg'
import slider3 from '../assets/Banner/Banner3.jpg'
import slider4 from '../assets/Banner/Banner4.jpg'
const Banner = () => {
    return (
        <div>
            <Carousel
                autoPlay
                interval={3000} 
                transitionTime={500}
                stopOnHover={false} 
                infiniteLoop={true}
            >
                <div>
                    <img src={slider2} />
                </div>
                <div>
                    <img src={slider1} />
                </div>
                <div>
                    <img src={slider3} />
                </div>
                <div>
                    <img src={slider4} />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;