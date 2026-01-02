import React, { useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Banner from './components/Banner';
import Filters from './components/Filters';
import NavBar from './components/NavBar';
import RoomList from './pages/RoomList';
import RoomDetails from './pages/RoomDetails';
import Checkout from './pages/Checkout';
import About from './pages/About';
import Login from './pages/Login';
import Signup from './pages/Signup';

function Home() {
  const [filters, setFilters] = useState(null);
  return (
    <div>
      <Banner />
      <div className="container">
        <Filters onSearch={(f) => setFilters(f)} />
        <RoomList filters={filters} />
      </div>
    </div>
  );
}

function App() {
  const [theme, setTheme] = React.useState(() => {
    try { return localStorage.getItem('theme') || 'dark' } catch { return 'dark' }
  });

  React.useEffect(() => {
    try { localStorage.setItem('theme', theme) } catch {}
  }, [theme]);

  function toggleTheme() {
    setTheme(t => (t === 'dark' ? 'light' : 'dark'))
  }

  return (
    <BrowserRouter>
      <div className={`App theme-${theme}`}>
        <NavBar theme={theme} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/rooms/:id" element={<RoomDetails />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
