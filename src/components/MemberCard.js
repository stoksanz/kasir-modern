// Member Card Component
import React from 'react';
import '../styles/components/MemberCard.css';

function MemberCard({ member, onClick }) {
  const getStatusClass = (status) => {
    return status === 'online' ? 'status-online' : 'status-offline';
  };

  const getLastSeenText = (date) => {
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Baru saja';
    if (diffMins < 60) return `${diffMins}m yang lalu`;
    if (diffHours < 24) return `${diffHours}h yang lalu`;
    return `${diffDays}d yang lalu`;
  };

  return (
    <div className="member-card" onClick={onClick}>
      <div className="member-avatar">
        <span className="avatar-emoji">{member.avatar}</span>
        <span className={`status-indicator ${getStatusClass(member.status)}`}></span>
      </div>
      <div className="member-info">
        <h3 className="member-name">{member.name}</h3>
        <p className="member-status">
          {member.status === 'online' ? 'Online' : `Offline - ${getLastSeenText(member.lastSeen)}`}
        </p>
      </div>
      {member.role === 'admin' && <span className="member-badge">Admin</span>}
    </div>
  );
}

export default MemberCard;