import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const MealDetail = () => {
    const { mealId } = useParams();
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/home')
    }

    return (
        <div>
            <h2>This is MealDetail {mealId}</h2>
            <button onClick={handleBack} >Back</button>
        </div>
    );
};

export default MealDetail;