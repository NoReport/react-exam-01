import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Tbook from './components/tableBook';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Tbook />} />
      </Routes>
    </Router>
  );
}

export default App;
