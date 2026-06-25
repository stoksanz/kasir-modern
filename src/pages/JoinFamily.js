// Join Family Page
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera } from 'lucide-react';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Button';
import BottomNavigation from '../components/BottomNavigation';
import '../styles/pages/JoinFamily.css';

function JoinFamily() {
  const [method, setMethod] = useState(null);
  const [code, setCode] = useState('');
  const [joined, setJoined] = useState(false);
  const navigate = useNavigate();

  const handleJoinWithCode = (e) => {
    e.preventDefault();
    if (code) {
      setJoined(true);
    }
  };

  if (joined) {
    return (
      <div className="join-family-container">
        <Header title="Bergabung dengan Keluarga" showBack />

        <div className="join-content">
          <div className="success-section">
            <div className="success-icon">✅</div>
            <h2>Berhasil!</h2>
            <p>Anda telah bergabung dengan keluarga</p>
          </div>

          <Button fullWidth variant="primary" onClick={() => navigate('/family')}>
            Lihat Keluarga
          </Button>
        </div>

        <BottomNavigation />
      </div>
    );
  }

  if (method === 'code') {
    return (
      <div className="join-family-container">
        <Header title="Masukkan Kode" showBack />

        <div className="join-content">
          <Card className="form-card">
            <h2>Kode Undangan</h2>
            <form onSubmit={handleJoinWithCode}>
              <div className="form-group">
                <label>Kode Keluarga</label>
                <input
                  type="text"
                  placeholder="Contoh: FAM123456"
                  value={code}
                  onChange={(e) => setCode(e.target.value.toUpperCase())}
                  maxLength="10"
                  required
                />
              </div>
              <Button fullWidth type="submit" disabled={!code}>
                Bergabung
              </Button>
              <Button
                fullWidth
                variant="secondary"
                onClick={() => setMethod(null)}
              >
                Kembali
              </Button>
            </form>
          </Card>
        </div>

        <BottomNavigation />
      </div>
    );
  }

  return (
    <div className="join-family-container">
      <Header title="Bergabung dengan Keluarga" showBack />

      <div className="join-content">
        <div className="join-header">
          <h2>Pilih Cara Bergabung</h2>
          <p>Minta anggota keluarga lain untuk berbagi kode atau QR code mereka</p>
        </div>

        <div className="join-methods">
          <Card
            className="method-card"
            onClick={() => setMethod('qr')}
            hoverable
          >
            <div className="method-icon">📱</div>
            <h3>Pindai QR Code</h3>
            <p>Gunakan kamera untuk memindai kode keluarga</p>
          </Card>

          <Card
            className="method-card"
            onClick={() => setMethod('code')}
            hoverable
          >
            <div className="method-icon">🔑</div>
            <h3>Masukkan Kode</h3>
            <p>Masukkan kode undangan secara manual</p>
          </Card>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}

export default JoinFamily;