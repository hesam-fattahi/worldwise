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
import styles from "../styles/components/Map.module.scss";
import useGeolocation from "../hooks/useGeolocation";
import useAppContext from "../hooks/useAppContext";
import useUrlPosition from "../hooks/useUrlPosition";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import btnStyles from "../styles/components/Button.module.scss";

const ChangeCenter = ({ position }) => {
  const map = useMap();
  map.setView(position);
  return null;
};

const DetectClick = () => {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => navigate(`form/?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
  });
};

const Map = () => {
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

  return (
    <div className={styles.mapContainer}>
      <MapContainer
        center={mapPosition}
        zoom={10}
        scrollWheelZoom={false}
        className={styles.map}
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
        <Button className={btnStyles.position} onClick={getPosition}>
          {isPositionLoading ? "Loading ..." : "Get current position"}
        </Button>
      )}
    </div>
  );
};

export default Map;
