import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SplashScreen from './pages/SplashScreen';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Family from './pages/Family';
import FamilyDetail from './pages/FamilyDetail';
import CreateFamily from './pages/CreateFamily';
import JoinFamily from './pages/JoinFamily';
import './styles/App.css';

function App() {
  // State untuk mengecek apakah user sudah login
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSplash, setShowSplash] = useState(true);

  React.useEffect(() => {
    // Simulasi splash screen selama 2 detik
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  return (
    <Router>
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/register" element={<Register setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        ) : (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/family" element={<Family />} />
            <Route path="/family/:id" element={<FamilyDetail />} />
            <Route path="/create-family" element={<CreateFamily />} />
            <Route path="/join-family" element={<JoinFamily />} />
            <Route path="/profile" element={<Profile setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;