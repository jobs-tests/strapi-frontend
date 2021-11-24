import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Homepage from './routes/Homepage';
import SpacenterPage from './routes/SpacecenterPage';

const App = function () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path=":id" element={<SpacenterPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
