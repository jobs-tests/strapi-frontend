/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Map from './Map';

const MapContainer = function () {
  return (
    <div className="flex-shrink-0 p-3 bg-white" style={{ flexGrow: 1 }}>
      <a
        href="/"
        className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom"
      >
        <span className="fs-5 fw-semibold">Departure</span>
      </a>
      <div>
        <Map />
      </div>
    </div>
  );
};

export default MapContainer;
