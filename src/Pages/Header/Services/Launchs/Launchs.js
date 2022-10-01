import React, { useEffect, useState } from 'react';
import Launch from '../Launch/Launch';

const Launchs = () => {
    const [launchs, setLaunchs] = useState([]);

    useEffect(() => {
        fetch('./Lunch.json')
            .then(res => res.json())
            .then(data => setLaunchs(data))
    }, []);


    return (
        <div>
            <h3>Launch</h3>
            <div className="container w-100 g-5 breakfasts-container">
                {
                    launchs.map(launch => <Launch
                        key={launch.key}
                        launch={launch}
                    ></Launch>)
                }
            </div>
        </div>
    );
};

export default Launchs;