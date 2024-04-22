import React, { Component } from 'react';
import ReactMapGl, { Marker, Popup } from 'react-map-gl'
import 'mapbox-gl/dist/mapbox-gl.css';

const mapboxToken = 'pk.eyJ1IjoiZGF2aWRuYXZpYXdlYiIsImEiOiJjbHYyb2xqNDUwYXFnMmtwZmRlaHpybHRuIn0.HfOz2uNSdI4dvI_5GeM4lw'

class Map extends Component {
    constructor() {
        super()
        this.state = {
            viewport: {
                width: '100%',
                height: '400',
                latitude: 37.2147497,
                longitude: -4.6595196,
                zoom: 6.5
            },
            currMarker: null,
            markers: [],
            selectedMarker: null
        }
        this.handleViewportChange = this.handleViewportChange.bind(this)
        this.handleResult = this.handleResult.bind(this)
        this.addMarker = this.addMarker.bind(this)
        this.handleClose = this.handleClose.bind(this)
        this.handleMarkerClick = this.handleMarkerClick.bind(this)
    }
    mapRef = React.createRef()

    handleViewportChange(viewport) {
        this.setState(prevState => ({
            viewport: { ...prevState.viewport, ...viewport }
        }))
    }
    handleResult(result) {
        this.setState({
            currMarker: {
                name: result.result.place_name,
                latitude: result.result.center[1],
                longitude: result.result.center[0]
            }
        })
    }
    addMarker() {
        const { currMarker } = this.state
        this.setState(prevState => ({
            markers: [...prevState.markers, currMarker],
            currMarker: null
        }))
    }
    handleMarkerClick(marker) {
        this.setState({
            selectedMarker: marker
        })
    }
    handleClose = () => {
        this.setState({
            selectedMarker: null
        })
    }
    render() {
        const { viewport, markers, selectedMarker } = this.state
        return (
            <div className="map-container h-96">
                <ReactMapGl
                    ref={this.mapRef}
                    {...viewport}
                    onViewportChange={viewport => this.setState({ viewport })}
                    mapboxAccessToken={mapboxToken}
                    mapStyle="mapbox://styles/mapbox/streets-v10"
                >
                    {markers.map((marker, idx) => {
                        return (
                            <Marker
                                key={idx}
                                latitude={marker.latitude}
                                longitude={marker.longitude}
                                onClick={() => this.handleMarkerClick(marker)}
                            >
                                <img src="pin.png" alt="marker" />
                            </Marker>
                        )
                    })
                    }
                    {this.state.selectedMarker &&
                        <Popup
                            mapRef={this.mapRef}
                            latitude={selectedMarker.latitude}
                            longitude={selectedMarker.longitude}
                            closeButton={true}
                            closeOnClick={false}
                            onClose={this.handleClose}
                        >
                            <h3>{selectedMarker.name}</h3>
                        </Popup>
                    }
                </ReactMapGl>
            </div>
        )
    }
}

export default Map;