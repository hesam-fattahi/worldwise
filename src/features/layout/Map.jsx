import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import useGeolocation from "../../hooks/useGeolocation";
import useAppContext from "../../hooks/useAppContext";
import useUrlPosition from "../../hooks/useUrlPosition";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";

const ChangeCenter = ({ position }) => {
  const map = useMap();
  map.setView(position);
  return null;
};

const Map = ({ toggleSidebar }) => {
  const { cities } = useAppContext();
  const [mapPosition, setMapPosition] = useState([48, 20]);
  const {
    position: currentPosition,
    isLoading: isPositionLoading,
    getPosition,
  } = useGeolocation();
  const [lat, lng] = useUrlPosition();

  useEffect(() => {
    if (lat && lng) setMapPosition([lat, lng]);
  }, [lat, lng]);

  useEffect(() => {
    if (currentPosition) setMapPosition(currentPosition);
  }, [currentPosition]);

  const DetectClick = ({ toggleFn }) => {
    const navigate = useNavigate();
    useMapEvent({
      click: (e) => {
        navigate(`form/?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
        toggleSidebar();
      },
    });
  };

  return (
    <div className="lg:col-span-2 h-full relative z-10">
      <MapContainer
        center={mapPosition}
        zoom={10}
        scrollWheelZoom={false}
        className="h-full"
      >
        <TileLayer
          attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((el) => (
          <Marker position={[el.position.lat, el.position.lng]} key={el.id}>
            <Popup>{el.cityName}</Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
      {mapPosition !== currentPosition && (
        <Button variant="primary" onClick={getPosition}>
          {isPositionLoading ? "Loading ..." : "Get current position"}
        </Button>
      )}
    </div>
  );
};

export default Map;
