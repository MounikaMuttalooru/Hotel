import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ROOMS from '../data/rooms';

export default function RoomDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const room = ROOMS.find(r => r.id === id);
  if (!room) return <div className="container">Room not found</div>;

  function submit(e) {
    e.preventDefault();
    const form = Object.fromEntries(new FormData(e.target));
    navigate('/checkout', { state: { booking: { ...form, room } } });
  }

  return (
    <div className="container">
      <div className="detail">
        <img src={room.image} alt={room.name} />
        <div>
          <h2>{room.name}</h2>
          <p>Price: ${room.price} / night</p>
          <p>Location: {room.location}</p>
          <p>Available: {room.available}</p>

          <form className="booking-form" onSubmit={submit}>
            <h3>Booking</h3>
            <div>
              <label>Name</label>
              <input name="name" required />
            </div>
            <div>
              <label>Email</label>
              <input name="email" type="email" required />
            </div>
            <div>
              <label>Phone</label>
              <input name="phone" required />
            </div>
            <div>
              <label>Payment (mock)</label>
              <input name="card" placeholder="Card number" />
            </div>
            <div style={{ marginTop: 10 }}>
              <button className="btn primary" type="submit">Checkout / Book Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
