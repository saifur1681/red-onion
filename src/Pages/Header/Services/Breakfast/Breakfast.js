import React from 'react';
import './Breakfast.css'

const Breakfast = ({ breakfasts }) => {
    const { name, img, description,price } = breakfasts;
    return (
        <div className="container card-container text-center  rounded">
            <img style={{width:"170px", height:"170px"}}className=" mt-3" src={img} alt="" />
            <h5>{name}</h5>
            <p>{description}</p>
            <h5>${price}</h5>
        </div>
    );
};

export default Breakfast;