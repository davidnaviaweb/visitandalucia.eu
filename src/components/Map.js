import React, { Component } from 'react';
import axios from 'axios';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';

const icons = axios.get('https://nac.andalucia.org/nac/api/resource_type/generic')
    .then(response => {
        console.log(response.data)
    })
    .catch(error => {
        console.error('Error al obtener contenido:', error);
    });
/* const icons = {
    'TIPRECALOJAM': 'url_del_icono_para_TIPRECALOJAM',
    'OTRO_CODIGO': 'url_del_icono_para_OTRO_CODIGO',
    // Agrega más códigos e iconos según sea necesario
};
 */
class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    };

    onMarkerClick = (props, marker, e) => {
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });
    };

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        const { places } = this.props;
        const mapStyles = {
            width: '100%',
            height: '100%'
        };

        return (
            <Map
                google={this.props.google}
                zoom={7}
                style={mapStyles}
                initialCenter={{
                    lat: 37.5,
                    lng: -4
                }}
            >
                {places.map(place => (
                    <Marker
                        key={place.name}
                        name={place.name}
                        position={{ lat: place.y_coord, lng: place.x_coord }}
                        onClick={this.onMarkerClick}
                    />
                ))}
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                    </div>
                </InfoWindow>
            </Map>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBqdk2xumPgIyVBOA6hU_gR69w6U5cKJE4'
})(MapContainer);
