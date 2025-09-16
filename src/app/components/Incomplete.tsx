import React from 'react';

const Incomplete = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            {/* GIF centrado */}
            <img 
                src="/quack.gif" 
                alt="Gif en desarrollo" 
                className="mb-6"
            />

            {/* Texto debajo del gif */}
            <p className="text-black font-bold text-2xl text-center">
                Esta página aún está en desarrollo
            </p>
        </div>
    );
};

export default Incomplete;
