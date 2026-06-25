// Reusable Button Component
import React from 'react';
import '../styles/components/Button.css';

function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  onClick,
  type = 'button',
  className = '',
  icon: Icon = null,
  ...props
}) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} btn-${size} ${fullWidth ? 'btn-full-width' : ''} ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {Icon && <span className="btn-icon">{Icon}</span>}
      <span className="btn-text">{children}</span>
    </button>
  );
}

export default Button;