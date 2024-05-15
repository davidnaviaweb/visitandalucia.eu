import React, { Component, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios';

const Place = (data) => {
    const [isLoading, setIsLoading] = useState(true);
    const [place, setPlace] = useState([]);
    const slug = useParams().slug;

    useEffect(() => {
        setIsLoading(true);

        async function loadPlace() {
            const places = await axios.post('https://nac.andalucia.org/nac/api/resource/paginated',
                {
                    "item_number": 0,
                    "page_size": 0,
                    "sort": "name",
                    "asc": true,
                    "filters": {
                        "slug": slug,
                    }
                }
            );


            const place = await axios.get('https://nac.andalucia.org/nac/api/resource/get/' + places.data.list[0].id);


            return place.data;
        }

        loadPlace().then(place => {
            setPlace(place);
            setIsLoading(false);
        });
    }, []);

    const placeArray = Object.entries(place).map(([key, value]) => ({ key, value }));
    return (
        <>
            <div className="relative w-full overflow-hidden bg-center bg-cover shadow-xl h-96 rounded-xl" style={{ backgroundImage: 'url(' + place.image + ')' }}>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <h1 className="text-5xl font-bold text-white">{place.name}</h1>

                </div>
            </div>
            <div className="flex flex-col">
                <p>{place.description}</p>
            </div>
            {placeArray.map((user, index) => (
                <p>{`${user.key}} : ${user.value}`}</p>
            ))}
        </>

    )
}

export default Place