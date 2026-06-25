// Login Page
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../components/Button';
import '../styles/pages/Auth.css';

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Simulasi login
    if (email && password) {
      setIsLoggedIn(true);
      navigate('/home');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-content">
        <div className="auth-header">
          <div className="auth-logo">👨‍👩‍👧‍👦</div>
          <h1>Guardian Family</h1>
          <p>Masuk ke akun Anda</p>
        </div>

        <form onSubmit={handleLogin} className="auth-form">
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Masukkan email Anda"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Kata Sandi</label>
            <input
              type="password"
              placeholder="Masukkan kata sandi Anda"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button fullWidth type="submit">
            Masuk
          </Button>
        </form>

        <div className="auth-footer">
          <p>
            Belum punya akun?{' '}
            <Link to="/register" className="auth-link">
              Daftar di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;