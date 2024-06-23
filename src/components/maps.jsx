import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon } from 'react-leaflet';


import L from 'leaflet';

//STYLE
import style from "../style/maps.module.css"
// Fixing the default marker icon issue with webpack
delete L.Icon.Default.prototype._getIconUrl;
import iconRetinaUrl from 'leaflet/dist/images/marker-icon-2x.png'
import iconUrl from 'leaflet/dist/images/marker-icon.png'
import shadowUrl from 'leaflet/dist/images/marker-shadow.png'

L.Icon.Default.mergeOptions({
    iconRetinaUrl: iconRetinaUrl,
    iconUrl: iconUrl,
    shadowUrl: shadowUrl,
});
// Default data
const defaultCenter = [51.505, -0.09];
const defaultZoom = 13;
const tileLayerURL = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const tileLayerAttribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
const mapStyle = { height: '100vh', width: '100%' };


const userPolygon = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
];



const Maps = ({ coord, city }) => {
    //MY STATE
    const [mkr, setMkr] = useState(false)
    const [m, setm] = useState({ lon: null, lat: null })
    //MY FUNCTION
    const handleMapClick = (e) => {
        setMarkers([...markers, { lat: e.gps.latitude, lng: e.gps.longitude, name: 'NewMarker' }]);
    };
    //MY EFFECTS
    useEffect(() => {
        const { lon, lat } = coord || {};
        setm({ lon, lat })

    }, [coord])
    //MY CHALENG
    setTimeout(() => {
        setMkr(true)
    }, 3000);
    return (
        <div className={style.maps}>

            <MapContainer center={defaultCenter} zoom={defaultZoom}
                style={{ mapStyle }} onClick={handleMapClick}>
                <TileLayer
                    url={tileLayerURL}
                    attribution={tileLayerAttribution}
                />
                {mkr && (<Marker position={[m.lat, m.lon]}>
                    <Popup>{city}</Popup>
                </Marker>)

                }



                <Polygon positions={userPolygon} />
            </MapContainer>
        </div>

    );
};
export default Maps