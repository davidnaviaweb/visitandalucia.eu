import React, { Component, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../components/Common/Banner';
import Gallery from '../components/Province/Gallery';
import PlaceCards from '../components/Province/PlaceCards';
import axios from 'axios';
import H2 from '../components/Common/H2';

const Province = (data) => {
  const [isLoading, setIsLoading] = useState(true);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    async function loadPlaces() {
      const places = await axios.post('https://nac.andalucia.org/nac/api/resource/paginated',
        {
          "item_number": 0,
          "page_size": 50,
          "sort": "name",
          "asc": true,
          "filters": {
            "outstanding": true,
            "resource_state.code": "ESTREPUBLICADO",
            "AND": [
              {
                "territories.province_id": foundProvince.id
              }
            ]
          }
        }
      );

      return places.data.list;
    }

    loadPlaces().then(provinces => {
      setPlaces(provinces);
      setIsLoading(false);
    });
  }, []);

  const slug = useParams().slug;
  const foundProvince = data.provinces.find(item => item.slug === slug);
  const images = foundProvince.multimedia_list.filter(image => image.multimedia_type.id === 1);

  return (
    <>
      <Banner src={foundProvince.image} text={foundProvince.name} />
      <H2 text={'Nuestros destacados'}></H2>
      <PlaceCards items={places} />
      <Gallery images={images} />
    </>

  )
}

export default Province