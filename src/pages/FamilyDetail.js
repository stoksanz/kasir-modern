// Family Member Detail Page
import React from 'react';
import { useParams } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';
import Header from '../components/Header';
import Card from '../components/Card';
import BottomNavigation from '../components/BottomNavigation';
import Button from '../components/Button';
import { mockFamilies } from '../data/mockData';
import '../styles/pages/FamilyDetail.css';

function FamilyDetail() {
  const { id } = useParams();
  const family = mockFamilies[0];
  const member = family.members.find((m) => m.id === id);

  if (!member) {
    return (
      <div className="family-detail-container">
        <Header title="Detail Anggota" showBack />
        <div className="error-message">Anggota tidak ditemukan</div>
        <BottomNavigation />
      </div>
    );
  }

  const getStatusColor = (status) => {
    return status === 'online' ? '#10b981' : '#666666';
  };

  return (
    <div className="family-detail-container">
      <Header title="Detail Anggota" showBack />

      <div className="detail-content">
        {/* Member Header */}
        <div className="member-header">
          <div className="member-avatar-large">{member.avatar}</div>
          <h2>{member.name}</h2>
          <p className="member-role">{member.role === 'admin' ? 'Administrator' : 'Anggota'}</p>
          <div className="member-status-badge" style={{ backgroundColor: getStatusColor(member.status) }}>
            {member.status === 'online' ? '🟢 Online' : '⚫ Offline'}
          </div>
        </div>

        {/* Contact Information */}
        <Card className="info-card">
          <h3>Informasi Kontak</h3>
          <div className="info-item">
            <span className="info-label">Email</span>
            <p>{member.email}</p>
          </div>
          <div className="info-item">
            <span className="info-label">Nomor Telepon</span>
            <p>{member.phone}</p>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className="action-buttons">
          <Button fullWidth variant="secondary" icon={<Phone size={20} />}>
            Hubungi
          </Button>
          <Button fullWidth variant="secondary" icon={<Mail size={20} />}>
            Kirim Pesan
          </Button>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}

export default FamilyDetail;