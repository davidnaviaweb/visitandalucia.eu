import React from 'react';
import ProvinceCard from './ProvinceCard';

const ProvinceCards = ({provinces}) => {
    co
    return (
        <div className="grid-container">
            {provinces.map((province, index) => (
                <div className="grid-item" key={index}>
                    <ProvinceCard {...province} />
                </div>
            ))}
        </div>
    );
};

export default ProvinceCards;