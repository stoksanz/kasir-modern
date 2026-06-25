// Profile Page
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LogOut, Edit } from 'lucide-react';
import Header from '../components/Header';
import Card from '../components/Card';
import Button from '../components/Button';
import BottomNavigation from '../components/BottomNavigation';
import { mockUser } from '../data/mockData';
import '../styles/pages/Profile.css';

function Profile({ setIsLoggedIn }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <div className="profile-container">
      <Header title="Profil" />

      <div className="profile-content">
        {/* Profile Header */}
        <div className="profile-header">
          <div className="profile-avatar">{mockUser.avatar}</div>
          <h2>{mockUser.name}</h2>
          <p className="profile-email">{mockUser.email}</p>
        </div>

        {/* Profile Info */}
        <Card className="info-card">
          <h3>Informasi Pribadi</h3>
          <div className="info-item">
            <span className="info-label">Nama</span>
            <p>{mockUser.name}</p>
          </div>
          <div className="info-item">
            <span className="info-label">Email</span>
            <p>{mockUser.email}</p>
          </div>
          <div className="info-item">
            <span className="info-label">Nomor Telepon</span>
            <p>{mockUser.phone}</p>
          </div>
          <div className="info-item">
            <span className="info-label">Role</span>
            <p>Administrator</p>
          </div>
        </Card>

        {/* Edit Profile Button */}
        <Button fullWidth variant="secondary" icon={<Edit size={20} />}>
          Edit Profil
        </Button>

        {/* Logout Button */}
        <Button
          fullWidth
          variant="danger"
          onClick={handleLogout}
          icon={<LogOut size={20} />}
        >
          Keluar
        </Button>
      </div>

      <BottomNavigation />
    </div>
  );
}

export default Profile;