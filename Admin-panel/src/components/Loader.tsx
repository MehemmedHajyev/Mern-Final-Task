// src/components/Loader.tsx
import React from 'react';

const Loader: React.FC = () => {
    return (

        <div className="loader fixed inset-0 flex justify-center items-center bg-black">
            <div className="ekg-wave relative flex items-center">
                <div className="wave bg-red-950"></div>
                <div className="wave bg-red-950"></div>
                <div className="wave bg-red-950"></div>
                <div className="wave bg-red-950"></div>
                <div className="wave bg-red-950"></div>
            </div>
        </div>







    );
}

export default Loader;
