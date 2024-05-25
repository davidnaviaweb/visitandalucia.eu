import React, { Component, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios';
import SimpleMap from '../components/Common/SimpleMap'
import Preloader from '../components/Common/Preloader';
import Gallery from '../components/Province/Gallery';
import Header from '../components/Place/Header';
import H2 from '../components/Common/H2';

const Place = (data) => {
    const [isLoading, setIsLoading] = useState(true);
    const [place, setPlace] = useState([]);
    const [images, setImages] = useState([]);
    const [center, setCenter] = useState([]);
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
            const center = { latitude: place.y_coord, longitude: place.x_coord };
            const images = place.multimedia_list.filter(image => image.multimedia_type.id === 1);

            setCenter(center);
            setImages(images);
            setIsLoading(false);
        });
    }, []);

    return (
        <>
            <Header place={place} />
            <div className="flex flex-col mt-8 lg:flex-row">
                <main className="w-full pr-0 lg:pr-12 lg:w-2/3">
                    <p className='relative text-lg italic font-light indent-8 quote font-rale'>{place.description}</p>
                </main>
                <aside className="w-full lg:w-1/3">
                    {isLoading ? (
                        <Preloader />
                    ) : (
                        <>
                            <H2 className='mt-8 text-xl lg:hidden' text='Ubicación' />
                            <SimpleMap places={[place]} center={center} zoom={10} height={300} popup={false} />
                            <h3 className='mt-4'><span className='font-bold'>Dirección:</span>&nbsp;{[place.vial_name, place.address_number, place.territories[0].name].join(', ')}</h3>
                            <h3 className='mt-4'><span className='font-bold'>Sitio web:</span>&nbsp;<Link target="_blank" to={place.contact_information[0].web}>{place.contact_information[0].web}</Link></h3>
                        </>
                    )}
                </aside>
            </div>
            <div className='w-100'>
                {isLoading ? (
                    <Preloader />
                ) : (
                    <>
                        <Gallery images={images} />
                    </>
                )}
            </div>
        </>
    )
}

export default Place