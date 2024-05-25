import React, { useEffect, useState } from 'react'
import FilterForm from './FilterForm'
import SimpleMap from './SimpleMap'
import Preloader from './Preloader';
import axios from 'axios';

function FilterableMap({ provinces, resourceTypes, places, popup }) {
    const [isLoading, setIsLoading] = useState(false);
    const [mapItems, setMapItems] = useState([""]);

    useEffect(() => { setMapItems(places) }, [places]);

    const handleFormChange = (formData) => {

        async function fetchData(formData) {
            let filters = { "resource_state.code": "ESTREPUBLICADO" };

            if (formData.province !== 0) {
                filters = { ...filters, "territories.parent_territory_id": formData.province };
            } else {
                filters = { ...filters, "territories.parent_territory_id": provinces.map(province => province.id) };
            }

            if (formData.category.length > 0) {
                filters = { ...filters, "resource_type.code": formData.category };
            } else {
                filters = { ...filters, "resource_type.code": "TIPRECAREANATURAL" };
            }

            const placesPromise = await axios.post('https://nac.andalucia.org/nac/api/resource/paginated', {
                "item_number": 0,
                "page_size": 50,
                "sort": "random",
                "filters": filters
            });

            const placesResponse = await placesPromise;

            return placesResponse.data;
        }

        fetchData(formData).then(data => {
            setMapItems(data.list);
            setIsLoading(false);
        });
    }

    return (
        <>
            {isLoading ? (
                <Preloader />
            ) : (
                <div className='flex flex-col gap-8 lg:flex-row lg:mx-0'>
                    <FilterForm provinces={provinces} resourceTypes={resourceTypes} onFormChange={handleFormChange} />
                    <SimpleMap places={mapItems} height={700} popup={popup} />
                </div>
            )}
        </>
    )
}

export default FilterableMap