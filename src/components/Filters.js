import React, { useState, useMemo } from 'react';
import ROOMS from '../data/rooms';

export default function Filters({ onSearch }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const locations = useMemo(() => Array.from(new Set(ROOMS.map(r => r.location))), []);

  function submit(e) {
    e.preventDefault();
    onSearch({ checkIn, checkOut, location, minPrice: minPrice ? Number(minPrice) : null, maxPrice: maxPrice ? Number(maxPrice) : null });
  }

  return (
    <form className="filters" onSubmit={submit}>
      <input type="date" value={checkIn} onChange={e => setCheckIn(e.target.value)} placeholder="Check-in" />
      <input type="date" value={checkOut} onChange={e => setCheckOut(e.target.value)} placeholder="Check-out" />
      <select value={location} onChange={e => setLocation(e.target.value)}>
        <option value="">All locations</option>
        {locations.map(l => <option key={l} value={l}>{l}</option>)}
      </select>
      <input type="number" min="0" placeholder="Min price" value={minPrice} onChange={e => setMinPrice(e.target.value)} />
      <input type="number" min="0" placeholder="Max price" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} />
      <button className="btn primary" type="submit">Search</button>
    </form>
  );
}
