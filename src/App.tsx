
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Demo from './pages/Demo';
import Preorder from './pages/Preorder';
import Investment from './pages/Investment';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/demo" element={<Demo />} />
        <Route path="/preorder" element={<Preorder />} />
        <Route path="/investment" element={<Investment />} />
      </Routes>
    </Router>
  );
}

export default App;