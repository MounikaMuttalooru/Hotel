import React from 'react';
import bannerImg from '../bannerimage.jpg';

export default function Banner() {
  return (
    <div className="banner" style={{ backgroundImage: `url(${bannerImg})` }}>
      <h1 style={{ textShadow: '0 2px 8px rgba(0,0,0,0.6)' }}>Find your perfect stay</h1>
    </div>
  );
}
