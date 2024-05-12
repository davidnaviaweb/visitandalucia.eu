import React from 'react';
import ProvinceCard from './ProvinceCard';

const ProvinceCards = ({provinces}) => {
    return (
        <div className="mt-4 grid grid-cols-2 gap-4">
            {provinces.map((province, index) => (
                <ProvinceCard {...province} />
            ))}
        </div>
    );
};

export default ProvinceCards;