import React, { Component, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../components/Home/Banner';
import Gallery from '../components/Province/Gallery';
import PlaceCards from '../components/Province/PlaceCards';
import axios from 'axios';
import H2 from '../components/Common/H2';

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
                    "page_size": 50,
                    "sort": "name",
                    "asc": true,
                    "filters": {
                        "slug": slug
                    }
                }
            );

            return places.data.list[0];
        }

        loadPlace().then(place => {
            setPlace(place);
            setIsLoading(false);
        });
    }, []);

    console.log(place);

    return (
        <>
            <div className="relative w-full overflow-hidden bg-center bg-cover shadow-xl h-96 rounded-xl" style={{ backgroundImage: 'url(' + place.image + ')' }}>
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <h1 className="text-5xl font-bold text-white">{place.name}</h1>
                </div>
            </div>
        </>

    )
}

export default Place