import React from 'react';
import { useNavigate } from 'react-router-dom';

const Launch = ({ launch }) => {
    const { name, img, description, price, id } = launch;
    const navigate = useNavigate();

    const handleDetail = () => {
        navigate(`/mealDetail/${id}`)
    }

    return (
        <div>
            <div onClick={() => handleDetail(id)} className="container card-container text-center  rounded">
                <img style={{ width: "170px", height: "170px" }} className=" mt-3" src={img} alt="" />
                <h5>{name}</h5>
                <p>{description}</p>
                <h5>${price}</h5>
            </div>
        </div>
    );
};

export default Launch;