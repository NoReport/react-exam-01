import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import tBook from './components/tableBook';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<tBook />} />
      </Routes>
    </Router>
  );
}

export default App;
