// frontend/src/components/Maps/Maps.js
import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import styles from "./Maps.module.css";

const containerStyle = {
  width: '950px',
  height: '750px',
};



// 38.610367855679854, -90.23154211403535
//40.7128° N, 74.0060° W
const center = {
  lat: 38.610537927342676,
  lng: -90.23145606985679,
};


const Map = ({ apiKey }) => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  return (
    <>
      {isLoaded && (
        <>
          <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={5}
        >
          <Marker
            position={center}
            icon={{url: '/images/favicon.ico',
              scaledSize: new window.google.maps.Size(50,50)
          }}
          />
          </GoogleMap>
        </>
      )}
    </>
  );
};

export default React.memo(Map);
