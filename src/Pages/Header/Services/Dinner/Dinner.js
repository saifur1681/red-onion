import React from 'react';

const Dinner = ({ dinner }) => {
    const { name, img, price, description } = dinner;
    return (
        <div>
            <div className="container card-container text-center  rounded">
                <img style={{ width: "170px", height: "170px" }} className=" mt-3" src={img} alt="" />
                <h5>{name}</h5>
                <p>{description}</p>
                <h5>${price}</h5>
            </div>
        </div>
    );
};

export default Dinner;