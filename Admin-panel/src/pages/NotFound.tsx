// src/components/NotFound.tsx
import React from 'react';
import { NavLink } from 'react-router-dom';

import './notFound/notFound.css'

const NotFound: React.FC = () => {
    return (
        <div className="stars">
            <div className="central-body">
                <img className="image-404" src="http://salehriaz.com/404Page/img/404.svg" width="300px" />
                <NavLink className="animated-button" to="/">
                    Home
                </NavLink>
            </div>
            <div className="objects">
                <img className="object_rocket" src="http://salehriaz.com/404Page/img/rocket.svg" width="40px" />
                <div className="earth-moon">
                    <img className="object_earth" src="http://salehriaz.com/404Page/img/earth.svg" width="100px" />
                    <img className="object_moon" src="http://salehriaz.com/404Page/img/moon.svg" width="80px" />
                </div>
                <div className="box_astronaut">
                    <img
                        className="object_astronaut"
                        src="http://salehriaz.com/404Page/img/astronaut.svg"
                        width="140px"
                    />
                </div>
            </div>
            <div className="glowing_stars">
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
                <div className="star" />
            </div>
        </div>

    );
}

export default NotFound;
