import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieSearch from './pages/MovieSearch';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<MovieSearch />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
