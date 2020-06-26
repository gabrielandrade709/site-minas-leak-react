import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import Box from '@material-ui/core/Box';
import { borderColor } from '@material-ui/system';
import './styles.css'; 

const Location = () => {
    return (
        <Box borderColor="error.main">
        <div className="map">
            <Map center={[-19.9358739979037, -43.97239208221436]} zoom={17} className="focus-in-expand">
                <Marker position={[-19.9358739979037, -43.97239208221436]}></Marker>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>contributors'
                /> 
            </Map>
        </div>
        </Box>
    );
}

export default Location;