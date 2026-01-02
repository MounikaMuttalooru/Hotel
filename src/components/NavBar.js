import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function NavBar({ theme, toggleTheme }) {
  const loc = useLocation();
  const atHome = loc.pathname === '/';

  return (
    <header className="navbar">
      <div className="nav-left">
        <Link to="/" className="brand">Hotel</Link>
        {atHome && <span className="nav-icon" title="Home">🏨</span>}
      </div>
      <nav className="nav-links">
        <Link to="/about">About</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        <button className="btn theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">{theme === 'dark' ? 'Light' : 'Dark'}</button>
      </nav>
    </header>
  );
}
