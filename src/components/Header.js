// Reusable Header Component
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import '../styles/components/Header.css';

function Header({ title, showBack = false, rightAction = null }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-content">
        {showBack ? (
          <button className="header-back" onClick={() => navigate(-1)}>
            <ArrowLeft size={24} />
          </button>
        ) : (
          <div className="header-spacer"></div>
        )}
        <h1 className="header-title">{title}</h1>
        <div className="header-right">
          {rightAction ? rightAction : <div className="header-spacer"></div>}
        </div>
      </div>
    </header>
  );
}

export default Header;