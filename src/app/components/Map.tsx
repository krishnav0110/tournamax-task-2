import "leaflet/dist/leaflet.css";
import styles from "@/styles/map.module.css";

import L from 'leaflet';
import { MapContainer, Marker, TileLayer, Popup, useMap } from "react-leaflet";
import { useState } from "react";



let DefaultIcon = L.icon({
  iconUrl: "marker-icon.png",
  iconAnchor: [14, 0],
  shadowUrl: "marker-shadow.png",
});





export default function MyMap(props: any) {
  const { position, zoom } = props;
  const [currentPosition, setPosition] = useState<L.LatLngExpression>(position);





  const markers = [
    { position: [28.6139, 77.209], label: "New Delhi" },
    { position: [19.076, 72.8777], label: "Mumbai" },
    { position: [13.0827, 80.2707], label: "Chennai" },
    { position: [22.5726, 88.3639], label: "Kolkata" },
    { position: [12.9716, 77.5946], label: "Bangalore" },
  ];



  const UpdateMapCenter = (props: {position: L.LatLngExpression}) => {
    const map = useMap();
    map.flyTo(props.position);
    return null;
  };





  return (
    <MapContainer center={currentPosition} zoom={zoom} scrollWheelZoom={true} style={{width: "100%", height: "100%"}}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.map((marker, index) => (
        <Marker key={index} position={marker.position as L.LatLngExpression} icon={DefaultIcon} eventHandlers={{ click: () => setPosition(marker.position as L.LatLngExpression) }}>
          <Popup className={styles.popup}>
            {marker.label}
          </Popup>
        </Marker>
      ))}

      <UpdateMapCenter position={currentPosition} />

    </MapContainer>
  );
}