import React from 'react';
import { useLocation, Link } from 'react-router-dom';

export default function Checkout() {
  const { state } = useLocation();
  const booking = state?.booking;

  if (!booking) {
    return (
      <div className="container">
        <h2>No booking information</h2>
        <Link to="/">Back to home</Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h2>Booking Confirmed</h2>
      <p>Thank you, {booking.name}. Your booking for <strong>{booking.room.name}</strong> is confirmed.</p>
      <p>Location: {booking.room.location}</p>
      <p>Price per night: ${booking.room.price}</p>
      <p>Contact: {booking.email} / {booking.phone}</p>
      <div style={{ marginTop: 12 }}>
        <Link to="/">Back to search</Link>
      </div>
    </div>
  );
}
