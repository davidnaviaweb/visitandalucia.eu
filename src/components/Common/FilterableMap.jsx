import React, { useEffect, useState } from 'react'
import FilterForm from './FilterForm'
import SimpleMap from './SimpleMap'
import Preloader from './Preloader';

function FilterableMap({ provinces, resourceTypes, places, popup }) {
    const [isLoading, setIsLoading] = useState(true);
    const [mapItems, setMapItems] = useState([]);

    useEffect(() => {handleFormChange()}, []);

    const handleFormChange = () => {
        setIsLoading(false);

        // async function fetchData() {
        //     const placesPromise = await axios.post('https://nac.andalucia.org/nac/api/resource/paginated', {
        //         "item_number": 0,
        //         "page_size": 50,
        //         "sort": "random",
        //         "filters": {
        //             "outstanding": true,
        //             "resource_state.code": "ESTREPUBLICADO",
        //             "resource_type.code": [
        //                 "TIPRECAREANATURAL"
        //             ],
        //         }
        //     });
        //     const provincesPromise = await axios.get('https://nac.andalucia.org/nac/api/territory/provinces/isAndaluz');
        //     const resourceTypesPromise = await axios.get('https://nac.andalucia.org/nac/api/resource_type/generic');

        //     const [placesResponse, provincesResponse, resourceTypesResponse] = await Promise.all([placesPromise, provincesPromise, resourceTypesPromise]);

        //     const featuredItems = placesResponse.data.list;
        //     const provinces = provincesResponse.data.list;
        //     const resourceTypes = resourceTypesResponse.data.list;

        //     const provincePromises = provinces.map(province => axios.get(`https://nac.andalucia.org/nac/api/territory/get/${province.id}`));
        //     const provinceResponses = await Promise.all(provincePromises);
        //     const provinceData = provinceResponses.map(response => response.data);

        //     return { featuredItems, provinces: provinceData, resourceTypes };
        // }

        // fetchData().then(data => {
        //     setFeaturedItems(data.featuredItems);
        //     setProvinces(data.provinces);
        //     setMapItems(data.featuredItems);
        //     setResourceTypes(data.resourceTypes);
        //     setIsLoading(false);
        // });
    }

    return (
        <>
            {isLoading ? (
                <Preloader />
            ) : (
                <div className='flex flex-row gap-8'>
                    <FilterForm provinces={provinces} resourceTypes={resourceTypes} onFormChange={handleFormChange} />
                    <SimpleMap places={places} height={700} popup={popup} />
                </div>
            )}
        </>
    )
}

export default FilterableMap