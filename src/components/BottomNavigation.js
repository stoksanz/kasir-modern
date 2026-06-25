// Bottom Navigation Component
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home, Users, User } from 'lucide-react';
import '../styles/components/BottomNavigation.css';

function BottomNavigation() {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="bottom-nav">
      <Link
        to="/home"
        className={`nav-item ${isActive('/home') ? 'active' : ''}`}
      >
        <Home size={24} />
        <span>Home</span>
      </Link>
      <Link
        to="/family"
        className={`nav-item ${isActive('/family') ? 'active' : ''}`}
      >
        <Users size={24} />
        <span>Keluarga</span>
      </Link>
      <Link
        to="/profile"
        className={`nav-item ${isActive('/profile') ? 'active' : ''}`}
      >
        <User size={24} />
        <span>Profil</span>
      </Link>
    </nav>
  );
}

export default BottomNavigation;