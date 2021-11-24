import React from 'react';
import MapContainer from '../MapContainer';
import SideBar from './sidebar';

const Home = function () {
  return (
    <main>
      <h1 className="visually-hidden">Sidebars examples</h1>
      <SideBar />
      <MapContainer />
    </main>
  );
};
export default Home;
