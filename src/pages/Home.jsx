import FeaturedCards from '../components/Home/FeaturedCards'
import Banner from '../components/Home/Banner'
import ProvinceCards from '../components/Home/ProvinceCards'
import PropTypes from 'prop-types'; // Import PropTypes
import H1 from '../components/Common/H1'
import FilterableMap from '../components/Common/FilterableMap'

import banner from '../assets/images/2.jpg'

function Home({ provinces, items, mapItems, resourceTypes}) {
    console.log(provinces)
    return (
        <>
            <Banner src={banner} text={'Olé'} />
            <H1 text={'Descubre nuestra tierra'} />
            <ProvinceCards provinces={provinces} />
            <H1 text={'Lugares para perderse'} />
            <FeaturedCards items={items} />
            <H1 text={'Explora'} />
            <FilterableMap provinces={provinces} resourceTypes={resourceTypes} places={mapItems} popup={true} />
        </>
    )
}

Home.propTypes = {
    provinces: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired,
    mapItems: PropTypes.array.isRequired,
    resourceTypes: PropTypes.array.isRequired
};

export default Home