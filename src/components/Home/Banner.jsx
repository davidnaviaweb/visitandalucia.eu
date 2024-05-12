import React from 'react';

import banner from './images/2.jpg';

const Banner = () => {
    return (
        <div className="w-full h-96 bg-cover bg-center flex items-center justify-center rounded-xl" style={{ backgroundImage: 'url(' + banner + ')' }}>
            <h1 className="text-6xl text-white font-bold drop-shadow shadow-stone-400">Olé</h1>
        </div>
    );
};

export default Banner;