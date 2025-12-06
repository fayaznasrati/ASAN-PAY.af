"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const redIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png",
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export default function MapCard() {
  const position = [34.5391420438226, 69.18036031157133];

  return (
    <div className="w-full max-w-xl mx-auto p-4">
      <div className="w-full h-[480px] rounded-lg overflow-hidden shadow">
        <MapContainer
          center={position}
          zoom={15}
          scrollWheelZoom={false}
          className="h-full w-full"
        >
          <TileLayer
            url="https://cartodb-basemaps-a.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={redIcon}>
            <Popup>Custom Red Marker</Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
}