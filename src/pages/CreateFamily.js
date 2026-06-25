// Create Family Page
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import QRCode from 'qrcode.react';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Button';
import BottomNavigation from '../components/BottomNavigation';
import '../styles/pages/CreateFamily.css';

function CreateFamily() {
  const [familyName, setFamilyName] = useState('');
  const [created, setCreated] = useState(false);
  const [familyCode] = useState('FAM123456');
  const navigate = useNavigate();

  const handleCreate = (e) => {
    e.preventDefault();
    if (familyName) {
      setCreated(true);
    }
  };

  if (created) {
    return (
      <div className="create-family-container">
        <Header title="Keluarga Dibuat" showBack />

        <div className="create-content">
          <div className="success-section">
            <div className="success-icon">✅</div>
            <h2>Selamat!</h2>
            <p>Keluarga "{familyName}" telah berhasil dibuat</p>
          </div>

          <Card className="qr-card">
            <h3>Bagikan Keluarga</h3>
            <p className="qr-description">Minta anggota keluarga lain untuk memindai kode ini:</p>
            <div className="qr-container">
              <QRCode value={familyCode} size={200} />
            </div>
            <p className="qr-code-text">Kode: {familyCode}</p>
          </Card>

          <div className="action-buttons">
            <Button fullWidth variant="primary" onClick={() => navigate('/family')}>
              Lihat Keluarga
            </Button>
            <Button fullWidth variant="secondary" onClick={() => navigate('/home')}>
              Kembali ke Home
            </Button>
          </div>
        </div>

        <BottomNavigation />
      </div>
    );
  }

  return (
    <div className="create-family-container">
      <Header title="Buat Keluarga" showBack />

      <div className="create-content">
        <Card className="form-card">
          <h2>Informasi Keluarga</h2>
          <form onSubmit={handleCreate}>
            <div className="form-group">
              <label>Nama Keluarga</label>
              <input
                type="text"
                placeholder="Contoh: Keluarga Rizki"
                value={familyName}
                onChange={(e) => setFamilyName(e.target.value)}
                required
              />
            </div>

            <p className="form-hint">
              Buat nama yang mudah diingat dan identik dengan keluarga Anda
            </p>

            <Button fullWidth type="submit" disabled={!familyName}>
              Buat Keluarga
            </Button>
          </form>
        </Card>
      </div>

      <BottomNavigation />
    </div>
  );
}

export default CreateFamily;