import { MapContainer, TileLayer } from 'react-leaflet'
import MarkerPoint from './MarkerPoint';



function MapBox ({address}) {
    return(
        <MapContainer center={[address.location.lat, address.location.lng]} zoom={13} zoomControl={false} scrollWheelZoom={false}>
            <TileLayer
                 attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                 url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                 />
            <MarkerPoint address={address} />
        </MapContainer>
)
}

export default MapBox;