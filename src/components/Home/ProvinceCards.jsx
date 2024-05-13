import React from 'react';
import ProvinceCard from './ProvinceCard';

const ProvinceCards = ({ provinces }) => {
    return (
        <>
            <h1 className='mt-20 mb-8 text-5xl text-center text-puertoRico-300'>Descubre nuestra tierra</h1>
            <div className="grid grid-cols-2 gap-4 mt-4">
                {provinces.map((province, index) => (
                    <ProvinceCard {...province} key={index} />
                ))}
            </div>
        </>
    );
};

export default ProvinceCards;