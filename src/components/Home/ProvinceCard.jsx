import React from 'react';
import { Link } from 'react-router-dom';

const ProvinceCard = (province) => {
    let { name, image, slug } = province;

    return (
        <Link to={`/provincia/${slug}`}>
            <div className="relative h-96 bg-cover bg-center flex items-center justify-center rounded-xl" style={{ backgroundImage: 'url(' + image + ')' }}>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h2 className="text-white text-xl font-bold">{name}</h2>
                </div>
            </div>
        </Link>
    );
};

export default ProvinceCard;