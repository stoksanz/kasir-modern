// Home Dashboard Page
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Users, Phone, Activity, Plus } from 'lucide-react';
import Header from '../components/Header';
import Card from '../components/Card';
import BottomNavigation from '../components/BottomNavigation';
import ActivityItem from '../components/ActivityItem';
import Button from '../components/Button';
import { mockFamilies, mockActivities, mockEmergencyContacts } from '../data/mockData';
import '../styles/pages/Home.css';

function Home() {
  const navigate = useNavigate();
  const family = mockFamilies[0];
  const onlineMembers = family.members.filter((m) => m.status === 'online').length;

  return (
    <div className="home-container">
      <Header title="Guardian Family" />

      <div className="home-content">
        {/* Stats Cards */}
        <div className="stats-grid">
          <Card className="stat-card">
            <div className="stat-icon">👥</div>
            <div className="stat-info">
              <p className="stat-label">Total Anggota</p>
              <p className="stat-value">{family.members.length}</p>
            </div>
          </Card>

          <Card className="stat-card">
            <div className="stat-icon">🟢</div>
            <div className="stat-info">
              <p className="stat-label">Online</p>
              <p className="stat-value">{onlineMembers}</p>
            </div>
          </Card>
        </div>

        {/* Emergency Contacts */}
        <div className="section">
          <div className="section-header">
            <h2>Kontak Darurat</h2>
            <a href="#" className="see-all">Lihat Semua</a>
          </div>
          <div className="emergency-list">
            {mockEmergencyContacts.map((contact) => (
              <div key={contact.id} className="emergency-item">
                <span className="emergency-avatar">{contact.avatar}</span>
                <div className="emergency-info">
                  <p className="emergency-name">{contact.name}</p>
                  <p className="emergency-relation">{contact.relationship}</p>
                </div>
                <button className="emergency-call">
                  <Phone size={20} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activities */}
        <div className="section">
          <div className="section-header">
            <h2>Aktivitas Terbaru</h2>
            <a href="#" className="see-all">Lihat Semua</a>
          </div>
          <div className="activity-list">
            {mockActivities.map((activity) => (
              <ActivityItem key={activity.id} activity={activity} />
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="quick-actions">
          <Button
            fullWidth
            variant="primary"
            onClick={() => navigate('/family')}
            icon={<Users size={20} />}
          >
            Lihat Keluarga
          </Button>
          <Button
            fullWidth
            variant="secondary"
            onClick={() => navigate('/create-family')}
            icon={<Plus size={20} />}
          >
            Buat Keluarga
          </Button>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}

export default Home;