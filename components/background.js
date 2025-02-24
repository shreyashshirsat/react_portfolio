// src/components/DynamicBackground.js
import React from 'react';

const DynamicBackground = ({ imageUrl }) => {
    return (
        <div
            className="w-full h-screen bg-cover bg-center
                       flex justify-center items-center"
            style={{ backgroundImage: `url(${imageUrl})` }}
        >
            <h1 className="text-white text-4xl font-bold">
                Welcome to Dynamic Background!
            </h1>

        </div>
    );
};

export default DynamicBackground;
