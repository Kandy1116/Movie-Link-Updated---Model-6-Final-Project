import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import MovieSearch from './pages/MovieSearch';
import './App.css';

function App() {
  return (
    <BrowserRouter basename="/Movie-Link-Updated---Model-6-Final-Project">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<MovieSearch />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;