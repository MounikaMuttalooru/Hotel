import React from 'react';
import { Link } from 'react-router-dom';

export default function RoomCard({ room }) {
  return (
    <div className="room-card">
      <img src={room.image} alt={room.name} />
      <div className="info">
        <h3>{room.name}</h3>
        <p>Location: {room.location}</p>
        <p>Available: {room.available}</p>
        <p>Price: ${room.price} / night</p>
      </div>
      <div className="actions">
        <Link className="btn ghost" to={`/rooms/${room.id}`}>View</Link>
        <Link className="btn primary" to={`/rooms/${room.id}`}>Book</Link>
      </div>
    </div>
  );
}
