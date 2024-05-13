import React from 'react';
import { Link } from 'react-router-dom';

const ProvinceCard = (province) => {
    let { name, image, slug } = province;

    return (
        <Link to={`/provincia/${slug}`}>
            <div className="relative flex items-center justify-center overflow-hidden bg-center bg-cover h-96 rounded-xl " style={{ backgroundImage: 'url(' + image + ')' }}>
                <div className="absolute inset-0 bg-opacity-10 bg-gradient-to-t from-black to-transparent hover:from-neutral-900">
                    <h2 className="p-8 text-3xl font-bold text-white">{name}</h2>
                </div>
            </div>
        </Link>
    );
};

export default ProvinceCard;