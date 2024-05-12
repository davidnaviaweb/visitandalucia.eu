import React from 'react'
import Map from '../components/Map'
import Forms from '../components/Forms'
import FeaturedCards from '../components/Home/FeaturedCards'
import Banner from '../components/Home/Banner'
import ProvinceCards from '../components/Home/ProvinceCards'

function Home({provinces, items} ) {
    return (
        <div className="p-5">
            <Banner/>
            <ProvinceCards provinces={provinces}/>
            <h1>Mapa</h1>
            <Map places={ items } />
            <h1 style={{ textAlign: 'center' }}>Lugares de interés</h1><br></br>
            <Forms />
            <h1>Contenido</h1>
            <FeaturedCards items={ items } />
        </div>
    )
}

export default Home