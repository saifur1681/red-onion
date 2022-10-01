import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <div>
            <Link to="/breakfast" >Breakfast</Link>
            <Link className="mx-2" to="/launch" >Launch</Link>
            <Link className="mx-2" to="/dinner" >Dinner</Link>
        </div>
    );
};

export default Services;