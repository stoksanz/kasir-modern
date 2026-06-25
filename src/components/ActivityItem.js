// Activity Item Component
import React from 'react';
import '../styles/components/ActivityItem.css';

function ActivityItem({ activity }) {
  const getActivityIcon = (type) => {
    switch (type) {
      case 'member_joined':
        return '✅';
      case 'member_update':
        return '✏️';
      case 'family_created':
        return '👨‍👩‍👧‍👦';
      default:
        return '📝';
    }
  };

  const getTimeText = (date) => {
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Baru saja';
    if (diffMins < 60) return `${diffMins} menit`;
    if (diffHours < 24) return `${diffHours} jam`;
    return `${diffDays} hari`;
  };

  return (
    <div className="activity-item">
      <div className="activity-icon">{getActivityIcon(activity.type)}</div>
      <div className="activity-content">
        <p className="activity-text">
          <strong>{activity.user}</strong> {activity.action}
        </p>
        <span className="activity-time">{getTimeText(activity.timestamp)}</span>
      </div>
    </div>
  );
}

export default ActivityItem;