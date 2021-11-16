import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import Homepage from './routes/Homepage';
import SpacenterPage from './routes/SpacecenterPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />}>
          <Route path=":id" element={<SpacenterPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
