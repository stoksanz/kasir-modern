// Reusable Card Component
import React from 'react';
import '../styles/components/Card.css';

function Card({ children, className = '', onClick, hoverable = false }) {
  return (
    <div
      className={`card ${hoverable ? 'card-hoverable' : ''} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Card;