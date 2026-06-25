// Family Members List Page
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Plus } from 'lucide-react';
import Header from '../components/Header';
import BottomNavigation from '../components/BottomNavigation';
import MemberCard from '../components/MemberCard';
import Button from '../components/Button';
import { mockFamilies } from '../data/mockData';
import '../styles/pages/Family.css';

function Family() {
  const navigate = useNavigate();
  const family = mockFamilies[0];

  return (
    <div className="family-container">
      <Header title="Anggota Keluarga" />

      <div className="family-content">
        {/* Family Info */}
        <div className="family-info-card">
          <h2>{family.name}</h2>
          <p className="family-code">
            Kode: <strong>{family.code}</strong>
          </p>
        </div>

        {/* Members List */}
        <div className="section">
          <h3 className="section-title">Daftar Anggota ({family.members.length})</h3>
          <div className="members-list">
            {family.members.map((member) => (
              <MemberCard
                key={member.id}
                member={member}
                onClick={() => navigate(`/family/${member.id}`)}
              />
            ))}
          </div>
        </div>

        {/* Add Member Actions */}
        <div className="member-actions">
          <Button
            fullWidth
            variant="primary"
            onClick={() => navigate('/join-family')}
          >
            Gabung Keluarga Lain
          </Button>
        </div>
      </div>

      <BottomNavigation />
    </div>
  );
}

export default Family;