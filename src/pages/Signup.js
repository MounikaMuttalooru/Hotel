import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    console.log('signup', data);
    navigate('/');
  }

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form className="auth-form" onSubmit={submit}>
        <label>Name</label>
        <input name="name" required />
        <label>Email</label>
        <input name="email" type="email" required />
        <label>Password</label>
        <input name="password" type="password" required />
        <div style={{ marginTop: 10 }}>
          <button className="btn primary" type="submit">Create account</button>
        </div>
      </form>
    </div>
  );
}
