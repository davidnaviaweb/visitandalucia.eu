import React from 'react'
import Forms from '../components/Forms'
import FeaturedCards from '../components/Home/FeaturedCards'
import Banner from '../components/Home/Banner'
import ProvinceCards from '../components/Home/ProvinceCards'
import PropTypes from 'prop-types'; // Import PropTypes
import H1 from '../components/Common/H1'
import SimpleMap from '../components/Common/SimpleMap'

function Home({ provinces, items, mapItems }) {
    return (
        <>
            <Banner src={'./src/components/Home/images/2.jpg'} text={'Olé'} />
            <H1 text={'Descubre nuestra tierra'} />
            <ProvinceCards provinces={provinces} />
            <H1 text={'Lugares para perderse'} />
            <FeaturedCards items={items} />
            <H1 text={'Explora'} />
            <SimpleMap places={mapItems} popup={true} />
            {/* <h1 style={{ textAlign: 'center' }}>Lugares de interés</h1><br></br> */}
            {/* <Forms /> */}
            {/* <h1>Contenido</h1> */}
        </>
    )
}

Home.propTypes = {
    provinces: PropTypes.array.isRequired,
    items: PropTypes.array.isRequired,
    mapItems: PropTypes.array.isRequired
};

export default Home