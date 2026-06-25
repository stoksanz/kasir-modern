// Splash Screen Page
import React from 'react';
import '../styles/pages/SplashScreen.css';

function SplashScreen() {
  return (
    <div className="splash-screen">
      <div className="splash-content">
        <div className="splash-logo">👨‍👩‍👧‍👦</div>
        <h1 className="splash-title">Guardian Family</h1>
        <p className="splash-subtitle">Hubungkan Keluarga, Lindungi Hati</p>
        <div className="splash-loader">
          <div className="loader-dot"></div>
          <div className="loader-dot"></div>
          <div className="loader-dot"></div>
        </div>
      </div>
    </div>
  );
}

export default SplashScreen;