// frontend/src/components/Maps/Maps.js
import React from 'react';
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from '@react-google-maps/api';


const containerStyle = {
  width: '950px',
  height: '82%',
};


const center = {
  lat: 37.0902,
  lng:  -95.7129,
}


const Map = ({ apiKey, events }) => {

  const [selected, setSelected] = React.useState(null);
  let selected_lat = +selected?.Venues[0]?.lat;
  let selected_lng = +selected?.Venues[0]?.lng;

  let selected_pos = {
    lat: selected_lat,
    lng: selected_lng
  }


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: apiKey,
  });

  const latt = +events[3]?.Venues[0]?.lat
  const lngg = +events[3]?.Venues[0]?.lng


  return (
    <>
      {isLoaded && (
        <>
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={4}
          >
            {events?.map(event => {
              let lat = +event?.Venues[0]?.lat;
              let lng = +event?.Venues[0]?.lng;
              return (
               <Marker
                position={{ lat: lat,
                lng: lng }}
                icon={{url: '/images/favicon.ico',
                scaledSize: new window.google.maps.Size(50,50)}}
                onClick={() => setSelected(event)}
              />
            )})}
            {selected ? (
              <InfoWindow
              position={selected_pos}
              onCloseClick={() => {
                setSelected(null);
              }}
              >
                <div>
                  <h2>{selected.name}</h2>
                </div>
              </InfoWindow>
              )  : null}
          </GoogleMap>
        </>
      )}
    </>
  );
};

export default React.memo(Map);
