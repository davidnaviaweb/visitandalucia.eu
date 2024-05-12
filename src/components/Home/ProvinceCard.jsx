import React from 'react';

const ProvinceCard = (province) => {
    let { name, image } = province;

    return (
        <div className="w-full h-96 bg-cover bg-center flex items-center justify-center rounded-xl" style={{ backgroundImage: 'url(' + {image} + ')' }}>
            <img
                className="absolute inset-0 w-full h-full object-cover"
                src="ruta-de-la-imagen.jpg"
                alt="Imagen de fondo"
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="absolute bottom-0 left-0 right-0 p-4">
                <h2 className="text-white text-xl font-bold">{name}</h2>
            </div>
        </div>
    );
};

export default ProvinceCard;