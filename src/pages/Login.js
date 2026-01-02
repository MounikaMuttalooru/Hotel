import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  function submit(e) {
    e.preventDefault();
    // mock login
    const data = Object.fromEntries(new FormData(e.target));
    console.log('login', data);
    navigate('/');
  }

  return (
    <div className="container">
      <h2>Login</h2>
      <form className="auth-form" onSubmit={submit}>
        <label>Email</label>
        <input name="email" type="email" required />
        <label>Password</label>
        <input name="password" type="password" required />
        <div style={{ marginTop: 10 }}>
          <button className="btn primary" type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}
