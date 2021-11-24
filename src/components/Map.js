/* eslint-disable react/jsx-props-no-spreading */
import * as React from 'react';
import { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import Config from '../config';

const Map = function () {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: 900,
    latitude: 41.579606918652054,
    longitude: 4.244298260567439,
    zoom: 3.5,
    bearing: 0,
    pitch: 0,
    transitionDuration: 1000,
  });

  const { REACT_APP_MAPBOX_ACCESS_TOKEN } = Config;

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapboxApiAccessToken={REACT_APP_MAPBOX_ACCESS_TOKEN}
      mapStyle="mapbox://styles/mapbox/dark-v8"
    />
  );
};

export default Map;
