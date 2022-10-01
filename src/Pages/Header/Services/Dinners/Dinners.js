import React, { useEffect, useState } from 'react';
import Dinner from '../Dinner/Dinner';

const Dinners = () => {
    const [dinners, setDinners] = useState([]);

    useEffect(() => {
        fetch('./Dinner.json')
            .then(res => res.json())
            .then(data => setDinners(data))
    }, []);

    return (
        <div>
            <h2>Dinner</h2>
            <div className="container w-100 g-5 breakfasts-container" >
                {
                    dinners.map(dinner => <Dinner
                        key={dinner.key}
                        dinner={dinner}
                    ></Dinner>)
                }
            </div>
        </div>
    );
};

export default Dinners;