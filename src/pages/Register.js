// Register Page
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Button from '../components/Button';
import '../styles/pages/Auth.css';

function Register({ setIsLoggedIn }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    if (name && email && password && password === confirmPassword) {
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
          <p>Buat akun baru</p>
        </div>

        <form onSubmit={handleRegister} className="auth-form">
          <div className="form-group">
            <label>Nama Lengkap</label>
            <input
              type="text"
              placeholder="Masukkan nama lengkap Anda"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

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
              placeholder="Buat kata sandi yang kuat"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label>Konfirmasi Kata Sandi</label>
            <input
              type="password"
              placeholder="Konfirmasi kata sandi Anda"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <Button fullWidth type="submit">
            Daftar
          </Button>
        </form>

        <div className="auth-footer">
          <p>
            Sudah punya akun?{' '}
            <Link to="/login" className="auth-link">
              Masuk di sini
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;