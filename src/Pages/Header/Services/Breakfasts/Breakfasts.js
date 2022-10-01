import React, { useEffect, useState } from 'react';
import Breakfast from '../Breakfast/Breakfast';
import './Breakfasts.css'

const Breakfasts = () => {
    const [breakfasts, setBreakfasts] = useState([]);

    useEffect(() => {
        fetch('./Breakfast.json')
            .then(res => res.json())
            .then(data => setBreakfasts(data))
    }, [])

    return (
        <div>
            <h3>Breakfast</h3>
           <div className="container w-100 g-5 breakfasts-container" >
           {
                breakfasts.map(breakfasts => <Breakfast
                    key={breakfasts.key}
                    breakfasts={breakfasts}
                ></Breakfast>)
            }
           </div>

        </div>
    );
};

export default Breakfasts;