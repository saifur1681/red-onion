import React from 'react';
import background from '../../../images/bannerbackground.png';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner" >
            <img className="w-100" src={background} alt="" />
        </div>
    );
};

export default Banner;