import React from 'react';

const Banner = ({src, text}) => {
    return (
        <div className="w-full h-96 bg-cover bg-center flex items-center justify-center rounded-xl" style={{ backgroundImage: 'url(' + src + ')' }}>
            <h1 className="text-6xl text-white font-bold drop-shadow shadow-stone-400">{text}</h1>
        </div>
    );
};

export default Banner;