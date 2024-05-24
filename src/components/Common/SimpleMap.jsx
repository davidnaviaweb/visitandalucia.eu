import React, { useState, useMemo } from 'react';
import Map, {
    Marker,
    Popup,
    NavigationControl,
    ScaleControl,
    GeolocateControl
} from 'react-map-gl';
// import ReactMapGl, { Marker, Popup } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';
import FaIcon from './FaIcon';
import { Link } from 'react-router-dom';

const mapboxToken = 'pk.eyJ1IjoiZGF2aWRuYXZpYXdlYiIsImEiOiJjbHYyb2xqNDUwYXFnMmtwZmRlaHpybHRuIn0.HfOz2uNSdI4dvI_5GeM4lw'


function SimpleMap({ places, center, zoom, width, height, popup }) {
    const [popupInfo, setPopupInfo] = useState(null);
    
    if (center == undefined) {
        center = { latitude: 37.2147497, longitude: -4.6595196 }
    }
    if(zoom == undefined) { 
        zoom= 6.5
    }

    const newPlaces = places.filter(place => place.x_coord && place.y_coord);
    
    const pins = newPlaces.map((marker, index) => (
        
        <Marker
            key={`marker-${index}`}
            latitude={marker.y_coord}
            longitude={marker.x_coord}
            anchor="bottom"
            onClick={e => {
                // If we let the click event propagates to the map, it will immediately close the popup
                // with `closeOnClick: true`
                e.originalEvent.stopPropagation();
                if(popup)
                    setPopupInfo(marker);
            }}
        >
            <FaIcon resourceTypeCode={marker.resource_type.code} className={"h-8 w-8 bg-puertoRico-200 flex items-center justify-center text-xl rounded-full hover:drop-shadow-lg hover:bg-puertoRico-500 cursor-pointer"} />
        </Marker>
    ));

    return (
        <>
            <Map
                mapboxAccessToken={mapboxToken}
                initialViewState={{
                    latitude: center.latitude,
                    longitude: center.longitude,
                    zoom: zoom,
                    bearing: 0,
                    pitch: 0
                }}
                style={{ width: width || '100%', height: height || 600, borderRadius: 20, overflow: 'hidden' }}
                mapStyle="mapbox://styles/mapbox/streets-v10"
            >
                <GeolocateControl position="top-left" />
                <NavigationControl position="top-right" />
                <ScaleControl position="bottom-right" />
                {pins}
                {popupInfo && (
                    <Popup
                        anchor="top"
                        longitude={Number(popupInfo.x_coord)}
                        latitude={Number(popupInfo.y_coord)}
                        onClose={() => setPopupInfo(null)}
                        className='shadow-xl'
                    >
                        <div className='flex flex-col w-full h-full'>
                            <img src={popupInfo.image} alt={popupInfo.name} className="object-cover rounded-sm aspect-video" />
                            <Link to={`/lugar/${popupInfo.slug}`} className='mt-2 text-sm'>{popupInfo.name}</Link>
                        </div>
                    </Popup>
                )}
            </Map>
        </>
    );
}

export default SimpleMap;