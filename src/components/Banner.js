import React from 'react';

export default function Banner() {
  const url = 'https://images.unsplash.com/photo-1501117716987-c8e0b6b4f0b0?auto=format&fit=crop&w=1400&q=60';
  return (
    <div className="banner" style={{ backgroundImage: `url(${url})` }}>
      <h1 style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>Find your perfect stay</h1>
    </div>
  );
}
