'use client';

import 'mapbox-gl/dist/mapbox-gl.css';

import Map from 'react-map-gl';

const MapComponent = () => {
  const mapboxToken = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN;

  return (
    <Map
      mapboxAccessToken={mapboxToken}
      mapStyle="mapbox://styles/mapbox/streets-v12"
      style={{ padding: '0 !important', height: '100%' }}
      initialViewState={{
        latitude: 35.668641,
        longitude: 139.750567,
        zoom: 10,
      }}
      maxZoom={20}
      minZoom={3}
    />
  );
};

export default MapComponent;
